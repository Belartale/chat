// Core
import { put, select } from 'redux-saga/effects';
import { isEqual } from 'lodash';

// Actions
import { messagesActions } from '../../slice';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Api
import * as API from '../api';

// Types
import { RootState } from '../../../../init';
import { MessagesState } from '../../types';

export function* fetchMessages() {
    const { messages }: RootState = yield select((state) => state);
    const newMessages: MessagesState | null = yield makeRequest<MessagesState>({
        fetcher: API.fetchMessages,
    });

    if (newMessages !== null && !isEqual(messages, newMessages)) {
        yield put(messagesActions.setMessages(newMessages));
    }
}
