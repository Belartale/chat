// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = '';

// Types
export type InputMessageTypes = string;
type Options = { isValidationSymbol?: boolean };
type SetInputMessageType = string;

// Slice
export const inputMessageSlice = createSlice({
    name:     'inputMessage',
    initialState,
    reducers: {
        setInputMessageCreatorAction: (state,  action: PayloadAction<InputMessageTypes>) => action.payload,
    },
});

// Interfaces
const inputMessageActions = inputMessageSlice.actions;
export default inputMessageSlice.reducer;

export const useInputMessageRedux = (options?: Options) => {
    const inputMessage = useSelector(({ inputMessage }) => inputMessage);
    const dispatch = useDispatch();


    const setInputMessage = (payload: SetInputMessageType) => {
        if (options?.isValidationSymbol) {
            if (payload !== 'Backspace' && payload !== 'Escape') {
                dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessage + payload));
            } else if (payload === 'Backspace') {
                dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessage.slice(0, -1)));
            }
        } else {
            dispatch(inputMessageActions.setInputMessageCreatorAction(payload));
        }
    };

    return {
        inputMessageRedux:    inputMessage,
        setInputMessageRedux: (payload: SetInputMessageType) => void  setInputMessage(payload),
    };
};

// Used ./src/tools/helpers/makeRequest
export const setInputMessageCreatorAction = inputMessageActions.setInputMessageCreatorAction;
