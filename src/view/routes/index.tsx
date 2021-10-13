// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';
import { useUser } from '../../bus/user';

// Elements
import { Spinner } from '../elements';


export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }} = useTogglersRedux();

    useUser({ useEffectLocalStore: true });

    return (
        <Suspense fallback = { <Spinner /> }>
            { isLoggedIn ? <Private /> : <Public /> }
        </Suspense>
    );
};
