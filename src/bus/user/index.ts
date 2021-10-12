// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// Actions
import { RefreshUserActionAsync, RegisterUserActionAsync } from './saga/actions';

// Types
import { UserForm } from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    return {
        user:         user,
        refreshUser:  (payload: string) => void dispatch(RefreshUserActionAsync(payload)),
        registerUser: (payload: UserForm) => void dispatch(RegisterUserActionAsync(payload)),
    };
};
