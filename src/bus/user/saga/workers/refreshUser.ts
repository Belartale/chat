// Core
import { put } from 'redux-saga/effects';

// Types
import { User } from '../../types';
import { RefreshUserActionAsync } from '../types';

// Actions
import { uesrActions } from '../../slice';
import { togglerCreatorAction } from '../../../client/togglers';

// API
import * as API from '../api';

// Utils
import { makeRequest, userLocalStore } from '../../../../tools/utils';

export function* refreshUser(action: RefreshUserActionAsync) {
    const result: User = yield makeRequest<User>({
        fetcher:           () => API.refreshUser(action.payload),
        succesAction:      uesrActions.setUser,
        successSideEffect: function*(result) {
            if (result._id) {
                yield userLocalStore.setRefreshToken(result._id);
            }
        },
        errorSideEffect: function*() {
            yield userLocalStore.remoteRefreshToken();
        },
    });

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
