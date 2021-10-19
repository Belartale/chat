// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import {
    fetchMessages,
    createMessage,
    deleteMessage,
    changeMessage,
} from './workers';

function* watchFetchMessages(): SagaIterator {
    yield takeEvery(types.FETCH_MESSAGES_ASYNC, fetchMessages);
}

function* watchCreateMessage(): SagaIterator {
    yield takeEvery(types.CREATE_MESSAGE_ASYNC, createMessage);
}

function* watchDeleteMessage(): SagaIterator {
    yield takeEvery(types.DELETE_MESSAGE_ASYNC, deleteMessage);
}

function* watchChangeMessage(): SagaIterator {
    yield takeEvery(types.CHANGE_MESSAGE_ASYNC, changeMessage);
}

export function* watchMessages(): SagaIterator {
    yield all(
        [ call(watchFetchMessages), call(watchCreateMessage), call(watchDeleteMessage), call(watchChangeMessage) ],
    );
}
