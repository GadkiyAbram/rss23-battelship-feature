import {Player} from '../Entities/Player/Player.ts';
import {playersDb} from '../Entities/database.ts';

export const createPlayer = (player: Player): number => {
    playersDb.push(player);

    return playersDb.length;
}

export const findPlayer = (playerName: string): Player | {} => {
    return playersDb.find((record: Player) => record.name === playerName) || {};
}