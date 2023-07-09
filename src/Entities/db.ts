import {Player} from './Player/Player.ts';
import {Game} from './Game/Game.ts';

export type Room = {
    roomId: number,
    roomUsers?: [{ name: string, index: number }]
    // roomUsers: []
}

type Database = {
    players?: Player[],
    games?: Game[],
    rooms?: Room[],
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