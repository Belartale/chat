// Core
import { put } from 'redux-saga/effects';

// Types

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import * as types from '../types';

export function* deleteMessage({ payload }: types.DeleteMessageActionAsync) {
    yield makeRequest({
        fetcher:           () => API.deleteMessage(payload),
        successSideEffect: function*() {
            yield put(fetchMessagesActionAsync());
        },
    });
}
