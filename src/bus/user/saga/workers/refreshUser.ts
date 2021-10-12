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

// Instruments
import { makeRequest, userLocalStore } from '../../../../tools/utils';

export function* refreshUser(action: RefreshUserActionAsync) {
    const result: User = yield makeRequest<User>({
        fetcher:           () => API.refreshUser(action.payload),
        togglerType:       'isRefreshUser',
        succesAction:      uesrActions.setUser,
        successSideEffect: (result) => {
            if (result._id) {
                userLocalStore.setRefreshToken(result._id);
            }
        },
        errorSideEffect: () => {
            userLocalStore.remoteRefreshToken();
        },
    });

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
