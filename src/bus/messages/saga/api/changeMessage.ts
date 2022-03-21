// Constants
import { API_URL } from '../../../../init';

// Types
import { ChangeMessageContract } from './types';

export const changeMessage: ChangeMessageContract = async ({ _id, text }) => {
    const response = await fetch(`${API_URL}/messages/${_id}`, {
        method:  'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
    });

    if (response.status !== 200) {
        throw new Error(`deleteMessage failed ${response.status}`);
    }

    return response.json();
};
