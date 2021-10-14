// Core
import { useLayoutEffect, useState } from 'react';

// Tools
import { useSelector } from './';

export const useValidation = (param?: boolean) => {
    const inputMessage: string | string[] = useSelector(({ inputMessage }) => inputMessage);
    const [ isValidation, setIsValidation ] = useState<boolean>(param ?? false);

    const handleValidation = (input: string | null) => {
        if (input !== null) {
            if (input.trim().length > 0 && input.trim().length < 20) {
                setIsValidation(true);
            } else {
                setIsValidation(false);
            }
        } else {
            setIsValidation(false);
        }
    };
    useLayoutEffect(() => {
        handleValidation(inputMessage);
    }, [ inputMessage ]);

    return {
        isValidation,
        handleValidation,
    };
};
