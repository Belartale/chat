import { UserForm } from '../types';

// Types Refresh
export const REFRESH_USER_ASYNC = 'REFRESH_USER_ASYNC';
export type RefreshUserActionAsync = {
    type: typeof REFRESH_USER_ASYNC;
    payload: string;
};
export type RefreshUserContract = (payload: string) => RefreshUserActionAsync

// Types Register
export const REGISTER_USER_ASYNC = 'REGISTER_USER_ASYNC';
export type RegisterUserActionAsync = {
    type: typeof REGISTER_USER_ASYNC;
    payload: UserForm;
};
export type RegisterUserContract = (payload: UserForm) => RegisterUserActionAsync
