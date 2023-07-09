import {db, shipsPositions} from '../Entities/db.ts';
import {getGameById} from './game.ts';
import {Ship} from '../Entities/types.ts';
import {shipsData} from '../Entities/db.ts';
import {getEnemy} from "./attack.ts";

const {ships: shipsTable} = db;
export const addShips = (playerId: number, ships: Ship): number => {
    return shipsTable.push({
        ships,
        currentPlayerIndex: playerId
    });
}

export const startGame = (playerId: number, ships: any): number => {
    return addShips(playerId, ships);
}

export const initShips = (playerId: number) => {
    const enemyShips = shipsData[playerId].data;

    const ships = JSON.parse(enemyShips).ships.ships;

    // let gameField: number[][] = [];
    let gameField: number[][] = new Array<Array<number>>(10);

    let stringResult = '';
    let stringResult2 = '';

    for (let i: number = 0; i < 10; i++) {
        gameField[i] = new Array(10);

        for (let j: number = 0; j < 10; j++) {
            gameField[i][j] = 0;
            stringResult += `${gameField[i][j]} `;
        }
        stringResult += `\n`;
    }

    // console.log(ships);

    // @ts-ignore
    ships.forEach(({position, direction, length: shipLength }) => {
        let {x: startX, y: startY} = position;
        // gameField[startX][startY] = 1;

        // let endpoint = direction ? startY + shipLength : startX + shipLength;

        if (direction) {
            for (let j = startY; j < startY + shipLength; j++) {
                gameField[startX][j] = 1;
                // console.log(`DIRECTION = ${direction} ${gameField[startX][j]} ${j}`);
            }
        } else {
            for (let i = startX; i < startX + shipLength; i++) {
                gameField[i][startY] = 1;
                // console.log(`DIRECTION = ${direction} ${gameField[i][startY]} ${i}`);
            }
        }
    });

    for (let i: number = 0; i < 10; i++) {
        for (let j: number = 0; j < 10; j++) {
            // stringResult2 += `[I: ${i} J:${j} ${gameField[j][i]}] `;
            stringResult2 += `${gameField[j][i]} `;
        }
        stringResult2 += `\n`;
    }

    // console.log(stringResult2);
    // console.log(JSON.parse(enemyShips).ships.ships);

    return {
        playerId,
        playerShips: gameField
    }
}

export const getShipsByPlayer = (playerId: number) => {
    const enemyId = getEnemy(playerId);

    // @ts-ignore
    return shipsPositions.find(({playerId: id}) => id === enemyId);
}

// export const getShipsByPlayer = (playerId: number) => {
//     const enemyId = getEnemy(playerId);
//     const enemyShips = shipsData[enemyId].data;
//
//     const ships = JSON.parse(enemyShips).ships.ships;
//
//     // let gameField: number[][] = [];
//     let gameField: number[][] = new Array<Array<number>>(10);
//
//     let stringResult = '';
//     let stringResult2 = '';
//
//     for (let i: number = 0; i < 10; i++) {
//         gameField[i] = new Array(10);
//
//         for (let j: number = 0; j < 10; j++) {
//             gameField[i][j] = 0;
//             stringResult += `${gameField[i][j]} `;
//         }
//         stringResult += `\n`;
//     }
//
//     // console.log(ships);
//
//     // @ts-ignore
//     ships.forEach(({position, direction, length: shipLength }) => {
//         let {x: startX, y: startY} = position;
//         // gameField[startX][startY] = 1;
//
//         // let endpoint = direction ? startY + shipLength : startX + shipLength;
//
//         if (direction) {
//             for (let j = startY; j < startY + shipLength; j++) {
//                 gameField[startX][j] = 1;
//                 // console.log(`DIRECTION = ${direction} ${gameField[startX][j]} ${j}`);
//             }
//         } else {
//             for (let i = startX; i < startX + shipLength; i++) {
//                 gameField[i][startY] = 1;
//                 // console.log(`DIRECTION = ${direction} ${gameField[i][startY]} ${i}`);
//             }
//         }
//     });
//
//     for (let i: number = 0; i < 10; i++) {
//         for (let j: number = 0; j < 10; j++) {
//             // stringResult2 += `[I: ${i} J:${j} ${gameField[j][i]}] `;
//             stringResult2 += `${gameField[j][i]} `;
//         }
//         stringResult2 += `\n`;
//     }
//
//     // console.log(stringResult2);
//     // console.log(JSON.parse(enemyShips).ships.ships);
//
//     return {
//         playerId: enemyId,
//         playerShips: gameField
//     }
// }