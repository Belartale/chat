// Core
import { store } from '../../init';

class GetKeysClass {
    get() {
        try {
            const backlitKeyboard: Array<number> = store.getState().backlitKeyboard;

            return backlitKeyboard;
        } catch (error) {
            return null;
        }
    }
}

export const GetKeys = new GetKeysClass();
