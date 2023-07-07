import {Player} from './Player/Player.ts';
import {Game} from './Game/Game.ts';

export interface Room {
    roomId: number,
    // roomUsers?: [{ name: string, index: number }]
    roomUsers: []
}

type Database = {
    players?: Player[],
    games?: Game[],
    rooms?: any,
    ships?: any
}

const db: Database = {
    players: [],
    games: [],
    rooms: [],
    ships: []
};

// const playersDb: Player[] = [];
// const gamesDb: Game[] = [];

export {
    db
}