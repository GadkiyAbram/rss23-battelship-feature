import {Player} from './Player/Player.ts';
import {Game} from './Game/Game.ts';

export type Room = {
    roomId: number,
    // roomUsers?: [{ name: string, index: number }]
    roomUsers: []
}

interface Database {
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

const shipsData: any = [];
const shipsPositions: any = [];

// const playersDb: Player[] = [];
// const gamesDb: Game[] = [];

export {
    db,
    shipsData,
    shipsPositions
}