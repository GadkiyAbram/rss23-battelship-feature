import {
    db,
    Room
} from '../Entities/db.ts';
import {Game} from '../Entities/Game/Game.ts';
import {Player} from "../Entities/Player/Player.ts";

const {
    rooms,
    players,
    games
} = db;

export const addRoom = (): number => {
    const lastIndex = rooms?.length || 0;

    const newRoom: Room = {
        roomId: lastIndex
    }

    if (rooms?.length !== 1) {
        rooms?.push(newRoom);
    }

    return 0;
    // return lastIndex ? lastIndex : rooms?.push(newRoom) || 1;
}

const getRoomById = (id: number) => {
    // @ts-ignore
    return rooms?.find(({roomId}) => roomId === id) || 0;
    // return rooms ? rooms[roomId] : null;
}

const createGame = () => {
    if (games?.length === 0) {
        games?.push(new Game(2));
    }

    return games?.length || 1;
}

export const getGameById = () => {
    return games ? games[0] : 0;
}

export const createRoom = (playerId: number): any => {
    const roomId = addRoom();

    return updateRoomState(roomId, playerId);
}

export const updateRoomState = (roomId: number, playerId: number) => {
    const room = getRoomById(roomId);

    // const player = players[playerId];
    const player = players?.shift();
    // room.roomUsers = [player];
    // room.roomUsers = [...room.roomUsers, player];

    if (room && player?.name) {
        if (room.roomUsers === undefined) {
            room.roomUsers = [{name: player?.name, index: playerId}];
        }

        if (room.roomUsers) {
            room.roomUsers.push({name: player?.name, index: playerId});
        }
    }

    return {
        ...room,
        roomId: roomId,
        id: 0
    }
}

export const addUserToTheRoom = (playerId: number, roomId: number) => {
    console.log(playerId);
    const idGame = createGame();
    const idPlayer = playerId;

    return {
        idGame,
        idPlayer
    }
}


export const updateRoom = (playerId: number) => {
    let roomId = 0;

    if (!rooms?.length) {
        roomId = addRoom();
    }

    return updateRoomState(roomId, playerId);
}