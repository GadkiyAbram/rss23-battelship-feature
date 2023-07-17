import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import {
    WebSocket,
    WebSocketServer
} from 'ws';
import {cmd} from '../handlers/cmd.ts';
import {
    cmds
} from '../constants/commands.ts';
import {nextPlayerTurn} from '../utils/nextPlayerTurn.ts';
import {shipsData} from '../Entities/db.ts';
import {attack} from '../handlers/attack.ts';

let socketId: number = 0;
const socketClients: {id: number, socketClient: WebSocket}[] = [];

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

const ws = new WebSocketServer({server: httpServer});

ws.on('connection', (webSocket) => {
    const newSocketId = socketId++;
    socketClients.push({id: newSocketId, socketClient: webSocket});

    console.log(`${newSocketId} Connected!`);

    webSocket.on('message', (msg) => {
        try {
            console.log(msg.toString());
            const requestData = JSON.parse(msg.toString());
            const {type} = requestData;
            let payload: any;

            if (requestData.data) {
                payload = JSON.parse(requestData.data);
            }

            if (type === cmds.REG) {
                const playerName = payload?.name;
                const playerPassword = payload?.password;

                const result = cmd(
                    type,
                    newSocketId,
                    {name: playerName, password: playerPassword}
                );

                const playerCreated = {
                    type,
                    data: JSON.stringify(result),
                    id: 0
                }

                webSocket.send(JSON.stringify(playerCreated));
            }

            if (type === cmds.CREATE_ROOM) {
                const room = cmd(type, newSocketId, payload);

                ws.clients.forEach((client) => {
                    client.send(JSON.stringify(room));
                });
            }

            if (type === cmds.ADD_USER_TO_ROOM) {
                socketClients.forEach(({id, socketClient}) => {
                    const result = cmd(type, id, payload);
                    socketClient.send(JSON.stringify(result));
                });
            }

            if (type === cmds.ADD_SHIPS) {
                const playerId: number = Number(payload.indexPlayer);
                const startGame: boolean = cmd(type, playerId, payload);

                const players = socketClients?.map(({id}) => id);
                const currentPlayer = nextPlayerTurn(playerId, players);

                if (startGame) {
                    socketClients.forEach(({id, socketClient}) => {
                        const data = shipsData[id];

                        socketClient.send(JSON.stringify({
                            type: cmds.START_GAME,
                            data
                        }));

                        socketClient.send(JSON.stringify({
                            type: cmds.TURN,
                            data: JSON.stringify({currentPlayer})
                        }))
                    });
                }
            }

            if (type === cmds.ATTACK) {
                const playerId = payload.indexPlayer;
                const result = attack(playerId, payload);

                const {nextPlayer, attackResult} = result;
                const players = socketClients?.map(({id}) => id);

                const currentPlayer = !nextPlayer ? playerId : nextPlayerTurn(playerId, players);

                socketClients.forEach(({socketClient}) => {

                    socketClient.send(JSON.stringify(attackResult));

                    socketClient.send(JSON.stringify({
                        type: cmds.TURN,
                        data: JSON.stringify({currentPlayer})
                    }));
                });
            }
        } catch (err) {
            console.log(err);
        }
    })
});
