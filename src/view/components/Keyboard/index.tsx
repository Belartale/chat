// Core
import React, { FC, useLayoutEffect } from 'react';
import { useBacklitKeyboardRedux } from '../../../bus/client/backlitKeyboard';

// Bus
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Utils
import { keysData, keysDataArray } from '../../../tools/utils/keysData';

// Elements
import { Button, Card } from '../../elements';

// Style
import { Container, GridContainer } from './styles';

// Types
interface KeyboardTypes {
    onSubmitButton: Function
}

type showLetterPropTypes = {
    element: {
        keyRuValue: string | null;
        keyEnValue: string | null;
        keyCode: string | null;
    }
    isToggle: boolean
};

export const Keyboard: FC<KeyboardTypes> = ({ onSubmitButton }) => {
    const { setInputMessageKeyboardRedux } = useInputMessageRedux();
    const { togglersRedux, setTogglerAction, setTogglerListenerAction } = useTogglersRedux();


    const {
        backlitKeyboardsRedux,
        setBacklitKeyboardActionRedux,
        deleteBacklitKeyboardActionRedux,
    } = useBacklitKeyboardRedux();
    useLayoutEffect(() => {
        console.log('useEffect');
        document.addEventListener('keydown', (event) => setBacklitKeyboardActionRedux(event.key));
        document.addEventListener('keyup', (event) => deleteBacklitKeyboardActionRedux(event.key));

        return () => {
            document.addEventListener('keydown', () => void 0);
            document.addEventListener('keyup', () => void 0);
        };
    }, []);


    const keyboardHandler = (event: any) => {
        const btn = event.target as HTMLElement;
        if (btn.textContent === 'Enter') {
            onSubmitButton();
        } else {
            btn.textContent && setInputMessageKeyboardRedux(btn.textContent);
        }

        if (btn.textContent === 'En') {
            setTogglerAction({ type: 'isKeyboardEnglish', value: false });
        }
        if (btn.textContent === 'Ру') {
            setTogglerAction({ type: 'isKeyboardEnglish', value: true });
        }

        if (btn.textContent === 'Shift') {
            setTogglerListenerAction({ type: 'isKeyboardCapsLock' });
        }
    };

    const showLetter = ({ element, isToggle }: showLetterPropTypes) => {
        let choose: string | null = togglersRedux.isKeyboardEnglish === true ? element.keyEnValue : element.keyRuValue;

        const chooseToLocaleUpperCase = (value: string) => {
            if (value !== 'Shift' && value !== 'Backspace' && value !== 'Space' && value !== 'Enter' && value !== 'En' && value !== 'Ру') {
                return value.toLocaleUpperCase();
            }

            return value;
        };

        return choose !== null ? (
            <Button
                key = { element.keyCode !== null ? element.keyCode : element.keyEnValue }
                style = { backlitKeyboardsRedux.some((elementRedux) => elementRedux === element.keyCode) ? { backgroundColor: 'red' } : {} }
                variant = 'primary'>
                {isToggle === true
                    ? chooseToLocaleUpperCase(choose)
                    : choose}
            </Button>
        ) : null;
    };

    return (
        <Container>
            <Card>
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
                    <GridContainer template = 'repeat(2, 1fr) 50% 1fr 10%'>
                        {keysData.fifthLine.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                </div>
            </Card>
        </Container>
    );
};
