import {getShipsByPlayer} from "./ships.ts";
import {ATTACK} from "../constants/commands.ts";

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

    let shipStatus = 'miss';

    if (ships[xShot][yShot]) {
        if ((xShot - 1 === 1 || xShot + 1 === 1) || (yShot - 1 === 1 || yShot + 1 === 1)) {
            shipStatus = 'shot';
        } else {
            shipStatus = 'killed';
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