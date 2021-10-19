// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState: Array<string> | null = [];

// Slice
export const backlitKeyboardSlice = createSlice({
    name:     'backlitKeyboard',
    initialState,
    reducers: {
        setBacklitKeyboardCreatorAction: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        deletebacklitKeyboardCreatorAction: (state, action: PayloadAction<string>) => {
            const item = state.indexOf(action.payload);

            state.splice(item, 1);
        },
    },
});

// Interfaces
const backlitKeyboardActions = backlitKeyboardSlice.actions;
export default backlitKeyboardSlice.reducer;

export const useBacklitKeyboardRedux = () => {
    const backlitKeyboard = useSelector(({ backlitKeyboard }) => backlitKeyboard);
    const dispatch = useDispatch();

    return {
        backlitKeyboardsRedux:         backlitKeyboard,
        setBacklitKeyboardActionRedux: (key: string) => dispatch(
            backlitKeyboardActions.setBacklitKeyboardCreatorAction(key),
        ),
        deleteBacklitKeyboardActionRedux: (key: string) => dispatch(
            backlitKeyboardActions.deletebacklitKeyboardCreatorAction(key),
        ),
    };
};

// Used ./src/tools/helpers/makeRequest
// export const backlitKeyboardCreatorAction = backlitKeyboardActions.backlitKeyboardCreatorAction;

