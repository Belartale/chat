// Core
import { useState } from 'react';

export const useValidation = (param?: boolean) => {
    const [ isValidation, setIsValidation ] = useState<boolean>(param ?? false);

    console.log(isValidation);

    const handleValidation = (input: string | null) => {
        console.log(input);
        if (input !== null) {
            if (input.length > 0 && input.length < 10) {
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
