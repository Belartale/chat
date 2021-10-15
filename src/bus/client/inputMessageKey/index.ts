// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    inputChatMessage:       '',
    inputChatMessageChange: '', // для фазы 2 (Опционально), Edit
};

// Types
export type InputMessageTypes = {
    inputChatMessage?:       string,
    inputChatMessageChange?: string,
};
// type SetInputMessageType = typeof initialState;

// Slice
export const inputMessageSlice = createSlice({
    name:     'inputMessage',
    initialState,
    reducers: {
        setInputMessageCreatorAction: (
            state: InputMessageTypes,
            action: PayloadAction<string>,
        ) => { state.inputChatMessage = action.payload; },

        setInputChatMessageChangeCreatorAction: (
            state: InputMessageTypes,
            action: PayloadAction<string>,
        ) => { state.inputChatMessageChange = action.payload; },
    },
});

// Interfaces
const inputMessageActions = inputMessageSlice.actions;
export default inputMessageSlice.reducer;

export const useInputMessageRedux = () => {
    const inputMessageState = useSelector(({ inputMessage }) => inputMessage);
    const dispatch = useDispatch();

    const setInputMessageKeyboard = (payload: string) => {
        if (
            payload !== 'Backspace'
            && payload !== 'Escape'
            && payload !== 'Calps'
            && payload !== 'Shift'
            && payload !== 'Control'
            && payload !== 'Win'
            && payload !== 'Shift'
        ) {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessageState.inputChatMessage + payload));
        } else if (payload === 'Backspace') {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessageState.inputChatMessage.slice(0, -1)));
        }
    };

    const setInputMessage = (payload: string) => {
        dispatch(inputMessageActions.setInputMessageCreatorAction(payload));
    };

    return {
        inputMessageRedux:            inputMessageState,
        setInputMessageRedux:         (payload: string) => void setInputMessage(payload),
        setInputMessageKeyboardRedux: (payload: string) => void setInputMessageKeyboard(payload),
    };
};
