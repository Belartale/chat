// Core
import { useState } from 'react';

export const useValidation = () => {
    const [ isValidation, setIsValidation ] = useState<boolean>(false);
    if (isValidation || isValidation.le) {
        
    }

    return {
        isValidation
        makeValidation
    }
};
