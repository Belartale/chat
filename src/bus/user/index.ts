// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// Utils
import { userLocalStore } from '../../tools/utils';

// Actions
import { RefreshUserActionAsync, RegisterUserActionAsync } from './saga/actions';
import { initialState, uesrActions } from './slice';
import { togglerCreatorAction } from '../client/togglers';

// Types
import { UserForm } from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    return {
        user:         user,
        refreshUser:  (payload: string) => void dispatch(RefreshUserActionAsync(payload)),
        registerUser: (payload: UserForm) => void dispatch(RegisterUserActionAsync(payload)),
        logoutUser:   () => {
            userLocalStore.remoteRefreshToken();
            dispatch(uesrActions.setUser(initialState));
            dispatch(togglerCreatorAction({
                type:  'isLoggedIn',
                value: false,
            }));
        },
    };
};
