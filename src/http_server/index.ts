import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import {WebSocket, WebSocketServer} from 'ws';
import {cmd} from '../handlers/cmd.ts';
import {
    ADD_SHIPS,
    ADD_USER_TO_ROOM,
    ATTACK,
    CREATE_GAME,
    CREATE_ROOM,
    START_GAME,
    TURN,
    REG, UPDATE_ROOM
} from "../constants/commands.ts";
import {addShips, getShipsByPlayer, initShips} from "../handlers/ships.ts";
import {nextPlayerTurn} from "../utils/nextPlayerTurn.ts";
import {shipsData, shipsPositions} from '../Entities/db.ts';
import {createPlayer} from "../handlers/player.ts";
import {updateRoom, updateRoomState} from "../handlers/game.ts";
import {db} from '../Entities/db.ts';
import {attack} from "../handlers/attack.ts";

const {ships: shipsTable} = db;

let socketId: number = 0;
// @ts-ignore
const startGameData = [];
const socketClients: {id: number, sock: WebSocket}[] = [];

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
    const newSocketId = socketId++;
    socketClients.push({id: newSocketId, sock: socket});

    console.log(`${newSocketId} Connected!`);

    socket.on('message', (msg) => {
        try {
            console.log(msg.toString());
            const requestData = JSON.parse(msg.toString());
            const {type} = requestData;
            let payload: any;

            if (requestData.data) {
                payload = JSON.parse(requestData.data);
            }

            if (type === REG) {
                const playerName = payload?.name;
                const playerPassword = payload?.password;

                const createdPlayer = createPlayer(
                    newSocketId,
                    {
                        name: playerName, password: playerPassword
                    });

                const playerCreated = {
                    type,
                    data: JSON.stringify(createdPlayer),
                    id: 0
                }

                socket.send(JSON.stringify(playerCreated));
            }

            if (type === CREATE_ROOM) {
                const updatedRoom = updateRoom(newSocketId);

                const roomUpdated = {
                    type: UPDATE_ROOM,
                    data: JSON.stringify([updatedRoom]),
                    id: 0
                }
                ws.clients.forEach((client) => {
                    client.send(JSON.stringify(roomUpdated));
                });
            }

            if (type === ADD_USER_TO_ROOM) {
                let playerId = 0;
                ws.clients.forEach((client) => {
                    const result = cmd(type, playerId, payload);
                    playerId++;
                    client.send(JSON.stringify(result));
                });
            }

            // if (type === ADD_SHIPS) {
            //     const playerId = payload?.indexPlayer;
            //     const ships = payload?.ships;
            //
            //     addShips(playerId, ships);
            //     // @ts-ignore
            //     const shipsData = shipsTable.find(({currentPlayerIndex}) => currentPlayerIndex === playerId);
            //
            //     shipsData[playerId] = {
            //         data: JSON.stringify(ships),
            //         id: 0
            //     }
            //
            //     shipsPositions.push(initShips(playerId));
            //
            //     console.log(shipsPositions);
            //
            //     if (shipsData.length === socketClients.length) {
            //         // let initId = 0;
            //         // const data = shipsData[initId];
            //         // const currentPlayerTurn = initId;
            //         socketClients.forEach(({id, sock}) => {
            //             const data = shipsData[id];
            //
            //             sock.send(JSON.stringify({
            //                 type: START_GAME,
            //                 data
            //             }));
            //
            //             sock.send(JSON.stringify({
            //                 type: TURN,
            //                 data: JSON.stringify({currentPlayer: id})
            //             }))
            //             // initId++;
            //         });
            //
            //
            //         // ws.clients.forEach((client) => {
            //         //     client.send(JSON.stringify({
            //         //         type: START_GAME,
            //         //         data
            //         //     }));
            //         //
            //         //     client.send(JSON.stringify({
            //         //         type: TURN,
            //         //         data: JSON.stringify({currentPlayer: currentPlayerTurn})
            //         //     }))
            //         //     initId++;
            //         // });
            //     }
            // }


            // if (type === CREATE_ROOM) {
            //     const result = cmd(type, socketId, payload);
            //     ws.clients.forEach((client) => {
            //         client.send(JSON.stringify(result));
            //     });
            // }
            // if (type === ADD_USER_TO_ROOM) {
            //     let playerId = 0;
            //     ws.clients.forEach((client) => {
            //         const result = cmd(type, playerId, payload);
            //         playerId++;
            //         client.send(JSON.stringify(result));
            //     });
            // }

            if (type === ADD_SHIPS) {
                // const startGameData = [];
                const playerId = payload.indexPlayer;

                shipsData[playerId] = cmd(type, playerId, payload);

                shipsPositions.push(initShips(playerId));
                const players = socketClients?.map(({id}) => id);

                console.log(shipsPositions);
                console.log(`PLAYERS: ${players}`);
                const currentPlayer = nextPlayerTurn(playerId, players);
                console.log(`current player: ${currentPlayer}`);

                if (shipsData.length === socketClients.length) {
                    socketClients.forEach(({id, sock}) => {
                        const data = shipsData[id];

                        sock.send(JSON.stringify({
                            type: START_GAME,
                            data
                        }));

                        sock.send(JSON.stringify({
                            type: TURN,
                            data: JSON.stringify({currentPlayer})
                        }))
                    });
                }
            }

            if (type === ATTACK) {
                const playerId = payload.indexPlayer;
                console.log(`PLSYER ID: ${playerId}`);
                const result = attack(playerId, payload);

                const {nextPlayer, attackResult} = result;
                const players = socketClients?.map(({id}) => id);

                console.log(result);
                const currentPlayer = !nextPlayer ? playerId : nextPlayerTurn(playerId, players);

                console.log(`CURRENT PLAYER: ${nextPlayerTurn(playerId, players)}`);

                socketClients.forEach(({sock}) => {

                    sock.send(JSON.stringify(attackResult));

                    sock.send(JSON.stringify({
                        type: TURN,
                        data: JSON.stringify({currentPlayer})
                    }));
                });

                // socket.send(JSON.stringify(result));

            }
        } catch (err) {
            console.log(err);
        }
    })
});
