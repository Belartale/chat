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
import { useEffect } from 'react';

type Options = {
    useEffectLocalStore?: boolean;
    scrollWindowChatCurrent?: HTMLElement | null;
}

export const useUser = (options?: Options) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    const scrollWindowChat = (current: HTMLElement | null) => {
        if (current) {
            let block: HTMLElement = current;
            block.scrollTop = 9999;
        }
    };

    useEffect(() => {
        if (options?.useEffectLocalStore) {
            if (
                typeof userLocalStore.getRefreshToken() === 'undefined'
            || userLocalStore.getRefreshToken().length > 0
            ) {
                dispatch(RefreshUserActionAsync(userLocalStore.getRefreshToken()));
            }
        }
    }, []);

    //!
    // useEffect(() => {
    //     if (options?.scrollWindowChatCurrent) {
    //         scrollWindowChat(options.scrollWindowChatCurrent);
    //         console.log('some text1111');
    //     }
    // });

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
        scrollWindowChat: (current: HTMLElement | null) => scrollWindowChat(current),
    };
};
