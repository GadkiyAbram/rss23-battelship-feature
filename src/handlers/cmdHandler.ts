import {
    REG,
    UPDATE_WINNERS,
    CREATE_ROOM
} from '../constants/commands.ts';
import {createPlayer} from './playerHandler.ts';

export const cmdHandler = (cmd: string, payload: {name: string, password: string}) => {
    switch (cmd) {
        case REG:
            const {name} = payload;
            const index = createPlayer(payload);

            return {
                type: cmd,
                data: {
                    name,
                    index,
                    error: false,
                    errorText: `Welcome ${name}`
                }
            };
        case 'update_winners':

        default:
            break;
    }
}