// commands (cmds)
const REG: string = 'reg';
const UPDATE_WINNERS: string = 'update_winners';
const CREATE_ROOM: string = 'create_room';
const ADD_USER_TO_ROOM: string = 'add_user_to_room';
const UPDATE_ROOM: string = 'update_room';
const CREATE_GAME: string = 'create_game';
const ADD_SHIPS: string = 'add_ships';
const START_GAME: string = 'start_game';
const TURN: string = 'turn';
const ATTACK: string = 'attack';
const FINISH: string = 'finish';

const cmds = {
    REG: 'reg',
    UPDATE_WINNERS: 'update_winners',
    CREATE_ROOM: 'create_room',
    UPDATE_ROOM: 'update_room',
    ADD_USER_TO_ROOM: 'add_user_to_room',
    CREATE_GAME: 'create_game',
    ADD_SHIPS: 'add_ships',
    START_GAME: 'start_game',
    TURN: 'turn',
    ATTACK: 'attack',
    FINISH:  'finish'
};

const attachStatuses = {
    MISS: 'miss',
    SHOT: 'shot',
    KILLED: 'killed'
}

export {
    cmds,
    attachStatuses
}