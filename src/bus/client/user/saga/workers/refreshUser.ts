// Core
// import { put } from 'redux-saga/effects';

// Types
import { UserState, RefreshUser } from '../../types';

// Sync actions

// API
import * as API from '../api';

// Instruments
import { IControlledError, makeRequest } from '../../../../../tools/utils';
import { uesrActions } from '../../slice';
import { RefreshUserActionAsync } from '../types';

export function* refreshUser(action: RefreshUserActionAsync) {
    const combineResult: IControlledError & RefreshUser = yield makeRequest<RefreshUser>({
        fetcher:          () => API.RefreshUser(action.payload),
        togglerType:      'isRefreshUser',
        succesAction:     uesrActions.setUser,
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    }
}
