// Core
import React, { FC, useEffect } from 'react';
import { useBacklitKeyboardRedux } from '../../../bus/client/backlitKeyboard';

// Bus
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Utils
import { keysData, keysDataArray } from '../../../tools/utils/keysData';

// Elements
import { Button } from '../../elements';

// Style
import { Container, GridContainer } from './styles';

// Types
interface KeyboardTypes {
    onSubmitButton: Function
    isIdChangeMessage: string | boolean
    onChangeButton: Function
}

type showLetterPropTypes = {
    element: {
        keyRuValue: string;
        keyEnValue: string;
        keyCode: number;
    }
    isToggle: boolean
};

export const Keyboard: FC<KeyboardTypes> = ({ onSubmitButton, isIdChangeMessage, onChangeButton }) => {
    const { setInputMessageKeyboardRedux } = useInputMessageRedux();
    const { togglersRedux, setTogglerAction, setTogglerListenerAction } = useTogglersRedux();


    const {
        backlitKeyboardsRedux,
        setBacklitKeyboardActionRedux,
        deleteBacklitKeyboardActionRedux,
    } = useBacklitKeyboardRedux();

    useEffect(() => {
        document.addEventListener('keydown', (event) => setBacklitKeyboardActionRedux(event.keyCode));
        document.addEventListener('keyup', (event) => deleteBacklitKeyboardActionRedux(event.keyCode));

        return () => {
            document.addEventListener('keydown', () => void 0);
            document.addEventListener('keyup', () => void 0);
        };
    }, []);


    const keyboardHandler = (event: any) => {
        const btn = event.target as HTMLElement;
        if (btn.textContent === 'Enter') {
            if (isIdChangeMessage) {
                onChangeButton();
            } else {
                onSubmitButton();
            }

            return void 0;
        }

        if (btn.textContent === 'En') {
            setTogglerAction({ type: 'isKeyboardEnglish', value: false });

            return void 0;
        }
        if (btn.textContent === 'Ру') {
            setTogglerAction({ type: 'isKeyboardEnglish', value: true });

            return void 0;
        }

        if (btn.textContent === 'CapsLock') {
            setTogglerListenerAction({ type: 'isKeyboardCapsLock' });

            return void 0;
        }

        if (btn.textContent === 'Shift') {
            return void 0;
        }

        btn.textContent && setInputMessageKeyboardRedux(btn.textContent);

        return void 0;
    };

    const showLetter = ({ element, isToggle }: showLetterPropTypes) => {
        let choose: string | null = togglersRedux.isKeyboardEnglish === true ? element.keyEnValue : element.keyRuValue;

        const chooseToLocaleUpperCase = (value: string) => {
            if (
                value !== 'Tab'
                && value !== 'CapsLock'
                && value !== 'Shift'
                && value !== 'Backspace'
                && value !== 'Space'
                && value !== 'Enter'
                && value !== 'En'
                && value !== 'Ру'
            ) {
                return value.toLocaleUpperCase();
            }

            return value;
        };

        return choose !== null ? (
            <Button
                active = { backlitKeyboardsRedux.includes(element.keyCode) }
                key = { element.keyCode }
                variant = 'primary'>
                {isToggle === true
                    ? chooseToLocaleUpperCase(choose)
                    : choose}
            </Button>
        ) : null;
    };

    return (
        <Container>
            <div onClick = { keyboardHandler }>
                {keysDataArray.map((line, index) => (
                    <GridContainer
                        key = { index }
                        template = { `repeat(${line.filter((oneLetter) => togglersRedux.isKeyboardEnglish
                            ? oneLetter.keyEnValue !== null
                            : oneLetter.keyRuValue !== null).length}, 1fr)` }>
                        {line.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                ))}
                <GridContainer template = '1fr 2fr 1fr'>
                    {keysData.fifthLine.map((element) => showLetter(
                        { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                    ))}
                </GridContainer>
            </div>
        </Container>
    );
};
