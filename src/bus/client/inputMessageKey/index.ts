// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = '';

// Types
export type InputMessageTypes = string;
// type SetInputMessageType = typeof initialState;

// Slice
export const inputMessageSlice = createSlice({
    name:     'inputMessage',
    initialState,
    reducers: {
        setInputMessageCreatorAction: (
            state: InputMessageTypes,
            action: PayloadAction<string>,
        ) => action.payload,
    },
});

// Interfaces
const inputMessageActions = inputMessageSlice.actions;
export default inputMessageSlice.reducer;

export const useInputMessageRedux = () => {
    const inputMessageState = useSelector(({ inputMessage }) => inputMessage);
    const dispatch = useDispatch();

    const setInputMessageKeyboard = (payload: string) => {
        if (payload === 'Backspace') {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessageState.slice(0, -1)));

            return void 0;
        }
        if (payload === 'Tab') {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessageState + '   '));

            return void 0;
        }
        if (payload === 'Space') {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessageState + ' '));

            return void 0;
        }
        dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessageState + payload));

        return void 0;
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
