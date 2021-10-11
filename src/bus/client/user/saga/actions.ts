// Types
import * as types from './types';

export const RefreshUserActionAsync: types.RefreshUserContract = (payload) => ({
    type: types.REFRESH_USER_ASYNC,
    payload,
});

