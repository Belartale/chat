// Core
import React, { FC } from 'react';

// Bus
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Utils
import { keysData } from '../../../tools/utils/keysData';

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
                key = { element.keyCode }
                variant = 'primary'>
                {isToggle === true
                    ? chooseToLocaleUpperCase(choose)
                    : choose}
            </Button>
        ) : null;
    };

    return (
        <Card>
            <div onClick = { keyboardHandler }>
                <Container>
                    <GridContainer template = { `repeat(${togglersRedux.isKeyboardEnglish === true ? 10 : 10 }, 1fr)` }>
                        {keysData.firstLine.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                    <GridContainer template = { `repeat(${togglersRedux.isKeyboardEnglish === true ? 10 : 11}, 1fr)` }>
                        {keysData.secondLine.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                    <GridContainer template = { `repeat(${togglersRedux.isKeyboardEnglish === true ? 9 : 11}, 1fr)` }>
                        {keysData.thirdLine.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                    <GridContainer template = { `repeat(${togglersRedux.isKeyboardEnglish === true ? 9 : 11}, 1fr)` }>
                        {keysData.forthLine.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                    <GridContainer template = 'repeat(2, 1fr) 50% 1fr 10%'>
                        {keysData.fifthLine.map((element) => showLetter(
                            { element: element, isToggle: togglersRedux.isKeyboardCapsLock },
                        ))}
                    </GridContainer>
                </Container>
            </div>
        </Card>
    );
};
