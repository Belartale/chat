// Types
export const REFRESH_USER_ASYNC = 'REFRESH_USER_ASYNC';
export type RefreshUserActionAsync = {
    type: typeof REFRESH_USER_ASYNC;
    payload: string;
};
export type RefreshUserContract = (payload: string) => RefreshUserActionAsync
