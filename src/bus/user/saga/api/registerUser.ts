// Tools
import { ControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init';

// Types
import * as types from '../../types';

export const registerUser: (userName: types.UserForm) => Promise<types.RegisterUser> = async (userName) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userName),
    });

    if (response.status !== 200 && response.status !== 201) {
        throw new ControlledError({
            message:    'registerUser failed',
            statusCode: response.status,
        });
    }

    return response.json();
};

