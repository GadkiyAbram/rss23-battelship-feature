import {Player} from './Player/Player.ts';
import {Game} from './Game/Game.ts';

export type Room = {
    roomId: number,
    roomUsers?: [{ name: string, index: number }]
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
let shipsPositions: any = [];
let gameField: any = [];

export {
    db,
    shipsData,
    shipsPositions,
    gameField
}