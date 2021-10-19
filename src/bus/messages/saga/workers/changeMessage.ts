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

export function* changeMessage({ payload }: types.ChangeMessageActionAsync) {
    yield makeRequest({
        fetcher:           () => API.changeMessage(payload),
        successSideEffect: function*() {
            yield put(fetchMessagesActionAsync());
        },
    });
}
