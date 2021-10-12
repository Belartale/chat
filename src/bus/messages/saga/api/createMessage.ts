// Tools
import { ControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const createMessage: (message: types.MessageUser) => Promise<types.Message> = async (message) => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    if (response.status !== 201) {
        throw new ControlledError({
            message:    'fetchMessages failed',
            statusCode: response.status,
        });
    }

    return response.json();
};
