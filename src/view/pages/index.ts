// Core
import { lazy } from 'react';

// Pages
export const Chat = lazy(() => import(/* webpackChunkName: "Chat" */ './Chat'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
