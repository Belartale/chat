// Types
import { MessagesState } from '../../types';

// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

export function* fetchMessages() {
    yield makeRequest<MessagesState>({
        fetcher:          API.fetchMessages,
        togglerType:      'isMessagesFetching',
        succesAction:     messagesActions.setMessages,
        isControlledMode: true,
    });
}
