// Core
import { put } from 'redux-saga/effects';

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Utils
import { makeRequest } from '../../../../tools/utils';

// Api
import * as API from '../api';

// Types
import { MessageUser } from '../../types';
import * as types from '../types';

export function* createMessage({ payload }: types.CreateMessageActionAsync) {
    yield makeRequest<MessageUser>({
        fetcher:           () => API.createMessage(payload),
        successSideEffect: function*() {
            yield put(fetchMessagesActionAsync());
        },
    });
}
