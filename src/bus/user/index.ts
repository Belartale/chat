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
import { useEffect, useLayoutEffect } from 'react';

type Options = {
    useEffectLocalStore?: boolean;
    scrollWindowChatCurrent?: HTMLElement | null;
}

export const useUser = (options?: Options) => {
    const dispatch = useDispatch();
    const { user, messages } = useSelector((state) => state);

    const scrollWindowChat = (current: HTMLElement | null) => {
        if (current) {
            current.scroll({
                top: current.scrollHeight,
            });
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


    useLayoutEffect(() => {
        if (options?.scrollWindowChatCurrent) {
            scrollWindowChat(options.scrollWindowChatCurrent);
        }
    }, [ messages[ 0 ]?._id ]);

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
