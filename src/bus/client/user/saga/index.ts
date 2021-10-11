// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    refreshUser,
} from './workers';

function* watchRefreshUser(): SagaIterator {
    yield takeEvery(types.REFRESH_USER_ASYNC, refreshUser);
}

export function* watchUser(): SagaIterator {
    yield all([ call(watchRefreshUser) ]);
}
