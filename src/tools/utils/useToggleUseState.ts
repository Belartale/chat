// Core
import { useState } from 'react';

export const useToggleUseState = () => {
    const [ isToggle, setIsToggle ]: [boolean, Function] = useState(true);

    const handleToggle = () => {
        isToggle ? setIsToggle(false) : setIsToggle(true);
    };

    return {
        isToggle,
        setIsToggle,
        handleToggle,
    };
};