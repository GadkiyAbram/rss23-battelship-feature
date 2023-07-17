import {
    db,
    Room
} from '../Entities/db.ts';
import {Game} from '../Entities/Game/Game.ts';

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
}

const getRoomById = (id: number) => {
    return rooms?.find(({roomId}) => roomId === id) || 0;
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

    const player = players?.shift();

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