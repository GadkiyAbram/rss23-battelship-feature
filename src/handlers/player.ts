import {Player} from '../Entities/Player/Player.ts';
import {db} from '../Entities/db.ts';
import {log} from "util";

const {players: playersTable} = db;

const addPlayer = (player: Player): number => {
    return playersTable?.push(player) || 0;
}
export const createPlayer = (playerId: number, payload: { name: string, password: string }): {
    name: string,
    index: number,
    error: boolean,
    errorText: string
} => {
    const playerExists = findPlayer(payload.name);

    if (!playerExists) {
        const newPlayer: Player = {
            name: payload.name,
            password: payload.password
        };
        const result = addPlayer(newPlayer);

        return {
            name: payload.name,
            index: result,
            error: false,
            errorText: `Player ${payload.name} created`
        }
    }
    return {
        name: payload.name,
        index: 0,
        error: true,
        errorText: `Error while creating a ${payload.name} player`
    }
}

export const findPlayer = (playerName: string): Player | boolean => {
    return playersTable?.find((record: Player) => record.name === playerName) || false;
}