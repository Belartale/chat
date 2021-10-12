// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    refreshUser,
    RegisterUser,
} from './workers';

function* watchRefreshUser(): SagaIterator {
    yield takeEvery(types.REFRESH_USER_ASYNC, refreshUser);
}

function* watchRegisterUser(): SagaIterator {
    yield takeEvery(types.REGISTER_USER_ASYNC, RegisterUser);
}

export function* watchUser(): SagaIterator {
    yield all([ call(watchRefreshUser), call(watchRegisterUser) ]);
}
