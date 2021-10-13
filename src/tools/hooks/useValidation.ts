// Core
import { useState } from 'react';

export const useValidation = (param?: boolean) => {
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

    return {
        isValidation,
        handleValidation,
    };
};
