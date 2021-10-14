// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = '';

// Types
export type inputMessageTypes = string;

// Slice
export const inputMessageSlice = createSlice({
    name:     'inputMessage',
    initialState,
    reducers: {
        inputMessageCreatorAction:        (state, action: PayloadAction<inputMessageTypes>) => action.payload,
        resetInputMessageToInitialAction: () => initialState,
    },
});

// Interfaces
const inputMessageActions = inputMessageSlice.actions;
export default inputMessageSlice.reducer;

export const useInputMessageRedux = () => {
    const dispatch = useDispatch();

    return {
        inputMessageRedux:     useSelector(({ inputMessage }) => inputMessage),
        setInputMessageAction: (options: string) => void dispatch(
            inputMessageActions.inputMessageCreatorAction(options),
        ),
        resetInputMessageToInitial: () => void dispatch(inputMessageActions.resetInputMessageToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const inputMessageCreatorAction = inputMessageActions.inputMessageCreatorAction;

