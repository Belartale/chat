// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

// Types
import { UserState } from './types';

export const initialState: UserState = {
    _id:      null,
    username: null,
};

export const uesrSlice = createSlice({
    name: 'user',
    initialState,
    reducers,
});

export const uesrActions = uesrSlice.actions;
export default uesrSlice.reducer;
