// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import * as actionAsync from './saga/actions';

// Types
import * as types from './types';

// Hooks
export const useMessages = () => {
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => state);

    useEffect(() => {
        dispatch(actionAsync.fetchMessagesActionAsync());
        setInterval(() => void dispatch(actionAsync.fetchMessagesActionAsync()), 5000);
    }, []);

    return {
        messages,
        createMessage: (payload: types.MessageUser) => void dispatch(actionAsync.createMessageActionAsync(payload)),
    };
};
