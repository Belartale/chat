// Core
import { useLayoutEffect, useState } from 'react';

export const useValidation = (value: string) => {
    const [ isValidation, setIsValidation ] = useState<boolean>(false);

    const handleValidation = (input: string | null) => {
        if (input !== null) {
            if (input.trim().length > 0) {
                setIsValidation(true);
            } else {
                setIsValidation(false);
            }
        } else {
            setIsValidation(false);
        }
    };
    useLayoutEffect(() => {
        handleValidation(value);
    }, [ value ]);

    return {
        isValidation,
        handleValidation,
    };
};
