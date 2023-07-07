import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import {WebSocketServer} from 'ws';
import {cmd} from '../handlers/cmd.ts';
import {ADD_SHIPS, ADD_USER_TO_ROOM, CREATE_GAME, CREATE_ROOM, START_GAME} from "../constants/commands.ts";
import {addShips} from "../handlers/ships.ts";

let socketId: number = 0;

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

ws.on('connection', (socket) => {
    // @ts-ignore
    const startGameData = [];
    const newSocketId = ++socketId;
    console.log(`${newSocketId} Connected!`);

    socket.on('message', (msg) => {
        try {
            console.log(msg.toString());
            const requestData = JSON.parse(msg.toString());
            const {type} = requestData;
            let payload = '';

            if (requestData.data) {
                payload = JSON.parse(requestData.data);
            }

            if (type === CREATE_ROOM) {
                const result = cmd(type, socketId, payload);
                ws.clients.forEach((client) => {
                    client.send(JSON.stringify(result));
                });
            } else if (type === ADD_USER_TO_ROOM) {
                let playerId = 0;
                ws.clients.forEach((client) => {
                    const result = cmd(type, playerId, payload);
                    playerId++;
                    client.send(JSON.stringify(result));
                });
            } else if (type === ADD_SHIPS) {
                // @ts-ignore
                const playerId = payload['indexPlayer'];

                startGameData[playerId] = cmd(type, playerId, payload);

                if (startGameData.length === 2) {
                    let initId = 0;
                    // @ts-ignore
                    const data = startGameData[initId];
                    ws.clients.forEach((client) => {
                        client.send(JSON.stringify({
                            type: START_GAME,
                            data
                        }));
                        initId++;
                    });
                }
            } else {
                const result = cmd(type, socketId, payload);
                socket.send(JSON.stringify(result));
            }
        } catch (err) {
            console.log(err);
        }
    })
});
