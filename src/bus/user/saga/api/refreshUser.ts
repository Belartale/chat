// Constants
import { API_URL } from '../../../../init';

// Types
import * as types from '../../types';

export const refreshUser: (id: string) => Promise<types.RefreshUser> = async (id: string) => {
    const response = await fetch(`${API_URL}/users/refresh/${id}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error(`fetchMessages failed ${response.status}`);
    }

    return response.json();
};
