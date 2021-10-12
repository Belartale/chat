// Core
import localStore from 'store';
import { isUndefined } from 'lodash';

const REFRESH_TOKEN_KEY = 'userId';

class UserLocalStore {
    setRefreshToken(newToken: string | null) {
        localStore.set(REFRESH_TOKEN_KEY, newToken ?? '');
    }

    getRefreshToken() {
        try {
            const TOKEN = localStore.get(REFRESH_TOKEN_KEY);

            if (isUndefined(TOKEN)) {
                throw new Error('Refresh token is empty');
            }

            return TOKEN;
        } catch (error) {
            return void 0;
        }
    }

    remoteRefreshToken() {
        localStore.clearAll();
    }
}

export const userLocalStore = new UserLocalStore();
