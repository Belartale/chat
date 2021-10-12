// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Message = {
    _id: string
    username: string
    text: string
    createdAt: string
    updatedAt: string
};
export type MessagesState = Array<Message>;

export type MessageUser = {
    username: Message['username'] | null
    text: Message['text'] | null
};

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<MessagesState>>;
