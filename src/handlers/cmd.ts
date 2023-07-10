import {
    cmds
} from '../constants/commands.ts';
import {createPlayer} from './player.ts';
import {
    addUserToTheRoom,
    updateRoom
} from './game.ts';
import {db, shipsData} from '../Entities/db.ts';
import {addShips} from './ships.ts';
import {attack} from './attack.ts';

const {
    players: playersTable,
    rooms,
    ships: shipsTable
} = db;

export const cmd = (cmd: string, socketId: number, payload: any) => {
    switch (cmd) {
        case cmds.REG:
            const created = createPlayer(socketId, payload);

            return {
                type: cmd,
                data: JSON.stringify(created),
                id: 0
            };
        case cmds.UPDATE_WINNERS:
            break;
        case cmds.CREATE_ROOM:
            const room = updateRoom(socketId);

            return {
                type: cmds.UPDATE_ROOM,
                data: JSON.stringify([room]),
                id: 0
            };
        case cmds.ADD_USER_TO_ROOM:
            const {indexRoom} = payload;
            const addedRoom = addUserToTheRoom(socketId, indexRoom);

            return {
                type: cmds.CREATE_GAME,
                data: JSON.stringify(addedRoom),
                id: 0
            }
        case cmds.ADD_SHIPS:
            const shipsData = addShips(socketId, payload);
            // @ts-ignore
            // const shipsData = shipsTable.find(({currentPlayerIndex}) => currentPlayerIndex === socketId);

            return {
                data: JSON.stringify(shipsData),
                id: 0
            }
        case cmds.ATTACK:
            return attack(socketId, payload);
        default:
            break;
    }
}