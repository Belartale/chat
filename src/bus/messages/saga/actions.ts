// Types
import * as types from './types';

// Actions
export const fetchMessagesActionAsync: types.FetchMessagesContract = () => ({
    type: types.FETCH_MESSAGES_ASYNC,
});

export const createMessageActionAsync: types.CreateMessageContract = (payload) => ({
    type: types.CREATE_MESSAGE_ASYNC,
    payload,
});

export const deleteMessageActionAsync: types.DeleteMessageContract = (payload) => ({
    type: types.DELETE_MESSAGE_ASYNC,
    payload,
});

export const changeMessageActionAsync: types.ChangeMessageContract = (payload) => ({
    type: types.CHANGE_MESSAGE_ASYNC,
    payload,
});

