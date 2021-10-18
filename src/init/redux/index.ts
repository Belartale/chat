// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import user from '../../bus/user/slice';
import messages from '../../bus/messages/slice';
import inputMessage from '../../bus/client/inputMessageKey';
import backlitKeyboard from '../../bus/client/backlitKeyboard';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        messages,
        user,
        inputMessage,
        backlitKeyboard,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
