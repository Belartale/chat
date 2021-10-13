// Core
import { put } from 'redux-saga/effects';

// Types
import { MessageUser } from '../../types';

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import * as types from '../types';

export function* createMessage({ payload }: types.CreateMessageActionAsync) {
    yield makeRequest<MessageUser>({
        fetcher:           () => API.createMessage(payload),
        togglerType:       'isMessagesFetching',
        successSideEffect: function*() {
            yield put(fetchMessagesActionAsync());
        },
    });
}
