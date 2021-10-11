// Tools
import { ControlledError } from '../../../../../tools/utils';
import { API_URL } from '../../../../../init';

// Types
import * as types from '../../types';

export const RegisterUser: (id: string) => Promise<types.RefreshUser> = async (id: string) => {
    const response = await fetch(`${API_URL}/users/refresh/${id}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'fetchMessages failed',
            statusCode: response.status,
        });
    }

    return response.json();
};

