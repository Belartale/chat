// Core
import { put } from 'redux-saga/effects';

// Bus
import { togglerCreatorAction } from '../../../client/togglers';

// Types
import { User } from '../../types';
import { RegisterUserActionAsync } from '../types';

// Tools
import { makeRequest, userLocalStore } from '../../../../tools/utils';

// API
import * as API from '../api';

// Actions
import { uesrActions } from '../../slice';

export function* RegisterUser(action: RegisterUserActionAsync) {
    const result: User | null = yield makeRequest<User>({
        fetcher:           () => API.registerUser(action.payload),
        togglerType:       'isRegisterUser',
        succesAction:      uesrActions.setUser,
        successSideEffect: (result) => {
            if (result._id) {
                userLocalStore.setRefreshToken(result._id);
            }
        },
    });

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
