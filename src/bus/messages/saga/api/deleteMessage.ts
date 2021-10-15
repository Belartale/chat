// Tools
import { ControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init/constants';

// Types
import { DeleteMessageContract } from './types';

export const deleteMessage: DeleteMessageContract = async (id) => {
    const response = await fetch(`${API_URL}/messages/${id}`, {
        method:  'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'deleteMessage failed',
            statusCode: response.status,
        });
    }

    return response.json();
};
