// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

// Types
import { MessagesState } from './types';

const initialState: MessagesState = [];

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers,
});

export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
