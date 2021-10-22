// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState: Array<number> = [];

// Slice
export const backlitKeyboardSlice = createSlice({
    name:     'backlitKeyboard',
    initialState,
    reducers: {
        setBacklitKeyboardCreatorAction: (state, action: PayloadAction<number>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        deletebacklitKeyboardCreatorAction: (state, action: PayloadAction<number>) => {
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
        setBacklitKeyboardActionRedux: (key: number) => dispatch(
            backlitKeyboardActions.setBacklitKeyboardCreatorAction(key),
        ),
        deleteBacklitKeyboardActionRedux: (key: number) => dispatch(
            backlitKeyboardActions.deletebacklitKeyboardCreatorAction(key),
        ),
    };
};

// Used ./src/tools/helpers/makeRequest
// export const backlitKeyboardCreatorAction = backlitKeyboardActions.backlitKeyboardCreatorAction;

