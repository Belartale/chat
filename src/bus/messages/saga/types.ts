import * as types from '../types';

// Types FETCH
export const FETCH_MESSAGES_ASYNC = 'FETCH_MESSAGES_ASYNC';
export type FetchMessagesActionAsync = {
    type: typeof FETCH_MESSAGES_ASYNC;
};
export type FetchMessagesContract = () => FetchMessagesActionAsync

// Types CREATE
export const CREATE_MESSAGE_ASYNC = 'CREATE_MESSAGE_ASYNC';
export type CreateMessageActionAsync = {
    type: typeof CREATE_MESSAGE_ASYNC;
    payload: types.MessageUser
};
export type CreateMessageContract = (payload: types.MessageUser) => CreateMessageActionAsync
