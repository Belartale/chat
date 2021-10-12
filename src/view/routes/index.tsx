// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';
import { useUser } from '../../bus/user';

// Elements
import { Spinner } from '../elements';

// Utils
import { userLocalStore } from '../../tools/utils';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }} = useTogglersRedux();

    const { refreshUser } = useUser();

    useEffect(() => {
        if (
            typeof userLocalStore.getRefreshToken() === 'undefined'
            || userLocalStore.getRefreshToken().length > 0
        ) {
            refreshUser(userLocalStore.getRefreshToken());
        }
    }, []);

    return (
        <Suspense fallback = { <Spinner /> }>
            { isLoggedIn ? <Private /> : <Public /> }
        </Suspense>
    );
};
