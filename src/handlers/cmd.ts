import {
    REG,
    UPDATE_WINNERS,
    CREATE_ROOM,
    ADD_USER_TO_ROOM,
    UPDATE_ROOM,
    CREATE_GAME,
    ADD_SHIPS,
    START_GAME
} from '../constants/commands.ts';
import {createPlayer} from './player.ts';
import {addUserToTheRoom, createRoom} from './game.ts';
import {db} from '../Entities/db.ts';
import {addShips, startGame} from "./ships.ts";

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
                data: JSON.stringify(created)
            };
        case UPDATE_WINNERS:
            break;
        case CREATE_ROOM:
            const room = createRoom(socketId);

            return {
                type: UPDATE_ROOM,
                data: JSON.stringify([room])
            }
        case ADD_USER_TO_ROOM:
            const {indexRoom} = payload;
            const addedRoom = addUserToTheRoom(socketId, indexRoom);

            return {
                type: CREATE_GAME,
                data: JSON.stringify(addedRoom)
            }
        case ADD_SHIPS:
            addShips(socketId, payload);

            // @ts-ignore
            const shipsData = shipsTable.find(({currentPlayerIndex}) => currentPlayerIndex === socketId);

            return {
                data: JSON.stringify(shipsData)
            }

            // console.log(JSON.stringify(payload))

            // if (playersTable?.length !== 2) {
            //     const addedShips =
            // }

            // break;

        default:
            break;
    }
}