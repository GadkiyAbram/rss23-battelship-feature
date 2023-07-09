import {getShipsByPlayer} from './ships.ts';
import {ATTACK} from '../constants/commands.ts';

export const getEnemy = (playerId: number): number => {
    if (playerId === 1) {
        return 0
    } else {
        return 1;
    }
}

export const attack = (playerId: number, payload: any) => {
    const enemyShips: any = getShipsByPlayer(payload.indexPlayer);
    const {x: xShot, y: yShot} = payload
    const {playerShips: ships} = enemyShips;
    let allDestroyed = true;

    let shipStatus = 'miss';

    if (ships[xShot][yShot]) {
        if ((xShot - 1 === 1 || xShot + 1 === 1) || (yShot - 1 === 1 || yShot + 1 === 1)) {
            shipStatus = 'shot';
        } else {
            shipStatus = 'killed';
        }

        for (let i: number = 0; i < 10; i++) {
            for (let j: number = 0; j < 10; j++) {
                if (ships[xShot][yShot]) {
                    allDestroyed = false;
                }
            }
        }

        if (allDestroyed) {
            return {
                type: 'finish',
                data: JSON.stringify({
                    winPlayer: playerId
                }),
                id: 0
            }
        }

        return {
            type: ATTACK,
            data: JSON.stringify({
                position: {
                    x: xShot,
                    y: yShot
                },
                currentPlayer: playerId,
                status: shipStatus
            }),
            id: 0
        }
    }
    return {
        type: ATTACK,
        data: JSON.stringify({
            position: {
                x: xShot,
                y: yShot
            },
            currentPlayer: playerId,
            status: shipStatus
        }),
        id: 0
    }
}