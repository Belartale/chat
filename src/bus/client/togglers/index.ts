// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    isOnline:           navigator.onLine,
    isMessagesFetching: false,
    isRefreshUser:      false,
    isKeyboard:         false,
    isKeyboardEnglish:  true,
    isKeyboardCapsLock: false,
    isLoggedIn:         false,
};

// Types
export type TogglersKeys = keyof typeof initialState;
type Options = { type: TogglersKeys, value: boolean | string | null };
type OptionsTogglerListener = { type: Options['type'] };

// Slice
export const toggrersSlice = createSlice({
    name:     'togglers',
    initialState,
    reducers: {
        togglerCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        resetTogglersToInitialAction: () => initialState,
    },
});

// Interfaces
const toggrersActions = toggrersSlice.actions;
export default toggrersSlice.reducer;

export const useTogglersRedux = () => {
    const togglers  = useSelector(({ togglers }) => togglers);
    const dispatch = useDispatch();

    const setTogglerListener = (options: OptionsTogglerListener) => {
        togglers[ options.type ] !== false ? dispatch(
            toggrersActions.togglerCreatorAction(
                { type: options.type, value: false },
            ),
        ) : dispatch(
            toggrersActions.togglerCreatorAction(
                { type: options.type, value: true },
            ),
        );
    };

    return {
        togglersRedux:            useSelector(({ togglers }) => togglers),
        setTogglerAction:         (options: Options) => void dispatch(toggrersActions.togglerCreatorAction(options)),
        setTogglerListenerAction: (options: OptionsTogglerListener) => setTogglerListener(options),
        resetTogglersToInitial:   () => void dispatch(toggrersActions.resetTogglersToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const togglerCreatorAction = toggrersActions.togglerCreatorAction;

