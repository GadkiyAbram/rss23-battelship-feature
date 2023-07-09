import {
    REG,
    UPDATE_WINNERS,
    CREATE_ROOM,
    ADD_USER_TO_ROOM,
    UPDATE_ROOM,
    CREATE_GAME,
    ADD_SHIPS,
    START_GAME,
    ATTACK
} from '../constants/commands.ts';
import {createPlayer} from './player.ts';
import {addUserToTheRoom, createRoom} from './game.ts';
import {db} from '../Entities/db.ts';
import {addShips, getShipsByPlayer, startGame} from "./ships.ts";
import {attack} from "./attack.ts";

const {
    players: playersTable,
    rooms,
    ships: shipsTable
} = db;

export const cmd = (cmd: string, socketId: number, payload: any) => {
    switch (cmd) {
        case REG:
            const created = createPlayer(socketId, payload);

            return {
                type: cmd,
                data: JSON.stringify(created),
                id: 0
            };
        case UPDATE_WINNERS:
            break;
        case CREATE_ROOM:
            const room = createRoom(socketId);

            return {
                type: UPDATE_ROOM,
                data: JSON.stringify([room]),
                id: 0
            }
        case ADD_USER_TO_ROOM:
            const {indexRoom} = payload;
            const addedRoom = addUserToTheRoom(socketId, indexRoom);

            return {
                type: CREATE_GAME,
                data: JSON.stringify(addedRoom),
                id: 0
            }
        case ADD_SHIPS:
            addShips(socketId, payload);
            // @ts-ignore
            const shipsData = shipsTable.find(({currentPlayerIndex}) => currentPlayerIndex === socketId);

            return {
                data: JSON.stringify(shipsData),
                id: 0
            }
        case ATTACK:
            return attack(socketId, payload);
        default:
            break;
    }
}