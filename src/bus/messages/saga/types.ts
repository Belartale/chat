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

// Types DELETE
export const DELETE_MESSAGE_ASYNC = 'DELETE_MESSAGE_ASYNC';
export type DeleteMessageActionAsync = {
    type: typeof DELETE_MESSAGE_ASYNC;
    payload: string
};
export type DeleteMessageContract = (payload: string) => DeleteMessageActionAsync

// Types CHANGE
export const CHANGE_MESSAGE_ASYNC = 'CHANGE_MESSAGE_ASYNC';
export type ChangeMessageActionAsync = {
    type: typeof CHANGE_MESSAGE_ASYNC;
    payload:  types.ChangeMessage
};
export type ChangeMessageContract = (payload: types.ChangeMessage) => ChangeMessageActionAsync
