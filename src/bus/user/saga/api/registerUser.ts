// Constants
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

    if (response.status !== 201) {
        throw new Error(`registerUser failed ${response.status}`);
    }

    return response.json();
};

