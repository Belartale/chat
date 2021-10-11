// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';
import { useUser } from '../bus/client/user';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
import { AppContainer } from './styles';


export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const [ userIdLocalStorage ] = useLocalStorage('userId', '');
    const { RefreshUser } = useUser();


    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
        if (userIdLocalStorage.length > 1) {
            RefreshUser(userIdLocalStorage);
        }
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
