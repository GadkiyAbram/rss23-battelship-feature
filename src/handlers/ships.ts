import {db} from '../Entities/db.ts';
import {getGameById} from './game.ts';

const {ships: shipsTable} = db;
export const addShips = (playerId: number, ships: any): number => {
    return shipsTable.push({
        ships,
        currentPlayerIndex: playerId
    });
}

export const startGame = (playerId: number, ships: any): number => {
    return addShips(playerId, ships);
}