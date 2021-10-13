// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = '';

// Types
export type inputKeyboardKey = keyof typeof initialState;

// Slice
export const inputKeyboardSlice = createSlice({
    name:     'inputKeyboard',
    initialState,
    reducers: {
        inputKeyboardCreatorAction:        (state, action: PayloadAction<string>) => action.payload,
        resetInputKeyboardToInitialAction: () => initialState,
    },
});

// Interfaces
const inputKeyboardActions = inputKeyboardSlice.actions;
export default inputKeyboardSlice.reducer;

export const useInputKeyboardRedux = () => {
    const dispatch = useDispatch();

    return {
        inputKeyboardRedux:     useSelector(({ inputKeyboard }) => inputKeyboard),
        setInputKeyboardAction: (options: string) => void dispatch(
            inputKeyboardActions.inputKeyboardCreatorAction(options),
        ),
        resetInputKeyboardToInitial: () => void dispatch(inputKeyboardActions.resetInputKeyboardToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const inputKeyboardCreatorAction = inputKeyboardActions.inputKeyboardCreatorAction;

