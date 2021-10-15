// Constants
import { API_URL } from '../../../../init';

// Types
import { FetchMessagesContract } from './types';

export const fetchMessages: FetchMessagesContract = async () => {
    const response = await fetch(`${API_URL}/messages`, {
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
