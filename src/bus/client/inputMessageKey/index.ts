// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLayoutEffect, useState } from 'react';
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
        setInputMessageCreatorAction: (state,  action: PayloadAction<inputMessageTypes>) => action.payload,
    },
});

// Interfaces
const inputMessageActions = inputMessageSlice.actions;
export default inputMessageSlice.reducer;

export const useInputMessageRedux = () => {
    const inputMessage: string | string[] = useSelector(({ inputMessage }) => inputMessage);
    const dispatch = useDispatch();

    const setInputMessageOneSymbol = (key: string) => {
        if (key !== 'Backspace' && key !== 'Escape') {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessage + key));
        } else if (key === 'Backspace') {
            dispatch(inputMessageActions.setInputMessageCreatorAction(inputMessage.slice(0, -1)));
        }
    };

    return {
        inputMessageRedux:     inputMessage,
        setInputMessageAction: (payload: string) => void  dispatch(
            inputMessageActions.setInputMessageCreatorAction(payload),
        ),
        setInputMessageOneSymbolAction: (key: string) => void setInputMessageOneSymbol(key),
    };
};

// Used ./src/tools/helpers/makeRequest
export const setInputMessageCreatorAction = inputMessageActions.setInputMessageCreatorAction;

