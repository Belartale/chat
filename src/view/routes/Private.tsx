// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Chat } from '../pages';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(()=> {
        //! /login|register/ ?????
        if (pathname.match(/login|register/)) {
            push('/chat');
        }
    });

    return (
        <Switch>
            <Route
                exact
                path = '/chat'>
                <Chat />
            </Route>
            <Redirect to = '/register' />
        </Switch>
    );
};
