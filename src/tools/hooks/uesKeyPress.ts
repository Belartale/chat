// Core
import { useState } from 'react';

export const useOnKeyPress = <T>(initialValue: T) => {
    const [ keyPressState, setKeyPressState ]: [T, Function] = useState(initialValue);


    // const handle = (input: string | null) => {};

    return {
        keyPressState,
        setKeyPressState,
    };
};
