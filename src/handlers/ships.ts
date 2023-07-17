import {db, shipsPositions} from '../Entities/db.ts';
import {Ship} from '../Entities/types.ts';
import {shipsData} from '../Entities/db.ts';
import {getEnemy} from "./attack.ts";
import {gameField} from '../Entities/db.ts';

const {ships: shipsTable} = db;
export const addShips = (playerId: number, ships: Ship[]): {ships: Ship[], currentPlayerIndex: number} => {
    const playerShips = {
        ships,
        currentPlayerIndex: playerId
    };

    shipsTable.push(playerShips);

    return playerShips;
}

export const initShips = (playerId: number) => {
    const enemyShips = shipsData[playerId].ships.ships;

    for (let i: number = 0; i < 10; i++) {
        gameField[i] = new Array(10);
        for (let j: number = 0; j < 10; j++) {
            gameField[i][j] = 0;
        }
    }

    // @ts-ignore
    enemyShips.forEach(({position, direction, length: shipLength }) => {
        let {x: startX, y: startY} = position;

        if (direction) {
            for (let j = startY; j < startY + shipLength; j++) {
                gameField[startX][j] = 1;
            }
        } else {
            for (let i = startX; i < startX + shipLength; i++) {
                gameField[i][startY] = 1;
            }
        }
    });

    return {
        playerId,
        playerShips: gameField
    }
}

export const getShipsByPlayer = (playerId: number) => {
    const enemyId: number = getEnemy(playerId);
    // const enemyId = playerId;

    // @ts-ignore
    return shipsPositions.find(({playerId: id}) => id === enemyId);
}