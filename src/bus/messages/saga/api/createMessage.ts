// Constants
import { API_URL } from '../../../../init';

// Types
import { CreateMessageContract } from './types';

export const createMessage: CreateMessageContract = async (message) => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    if (response.status !== 201) {
        throw new Error(`createMessage failed ${response.status}`);
    }

    return response.json();
};
