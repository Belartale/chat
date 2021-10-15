// Core
import React, { FC, useLayoutEffect, useState } from 'react';
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';

// Elements
import { Button, Card } from '../../elements';

// Style
import { Container, GridContainer } from './styles';

// Types
interface KeyboardTypes {
    onSubmitButton: Function
}

export const Keyboard: FC<KeyboardTypes> = ({ onSubmitButton }) => {
    const { setInputMessageKeyboardRedux } = useInputMessageRedux();

    const KeyboardButton = {
        variant: 'submit primary',
    };

    return (
        <Card>
            <div>
                <Container>
                    <GridContainer template = 'repeat(14, 1fr) minmax(auto, 80px)'>
                        {[
                            { name: 'Exc', code: 'Escape' },
                            { name: '`', code: '`' },
                            { name: '1', code: '1' },
                            { name: '2', code: '2' },
                            { name: '3', code: '3' },
                            { name: '4', code: '4' },
                            { name: '5', code: '5' },
                            { name: '6', code: '6' },
                            { name: '7', code: '7' },
                            { name: '8', code: '8' },
                            { name: '9', code: '9' },
                            { name: '0', code: '0' },
                            { name: '-', code: '-' },
                            { name: '=', code: '=' },
                            { name: '<=', code: 'Backspace' },
                        ].map((element) => (
                            <Button
                                onClick = { () => setInputMessageKeyboardRedux(element.code) }
                                { ...KeyboardButton }>{element.name}
                            </Button>
                        ))}
                    </GridContainer>
                    <GridContainer template = 'repeat(14, 1fr)'>
                        <Button
                            onClick = { () => setInputMessageKeyboardRedux('  ') }
                            { ...KeyboardButton }>Tab
                        </Button>
                        {[
                            { name: 'q', code: 'q' },
                            { name: 'w', code: 'w' },
                            { name: 'e', code: 'e' },
                            { name: 'r', code: 'r' },
                            { name: 't', code: 't' },
                            { name: 'y', code: 'y' },
                            { name: 'u', code: 'u' },
                            { name: 'i', code: 'i' },
                            { name: 'o', code: 'o' },
                            { name: 'p', code: 'p' },
                            { name: '[', code: '[' },
                            { name: ']', code: ']' },
                            { name: '/', code: '/' },
                        ].map((element) => (
                            <Button
                                onClick = { () => setInputMessageKeyboardRedux(element.code) } // 23 > w
                                { ...KeyboardButton }>{element.name}
                            </Button>
                        ))}
                    </GridContainer>
                    <GridContainer
                        template = 'repeat(13, 1fr)'>
                        {[
                            { name: 'Caps', code: 'Calps' },
                            { name: 'a', code: 'a' },
                            { name: 's', code: 's' },
                            { name: 'd', code: 'd' },
                            { name: 'f', code: 'f' },
                            { name: 'g', code: 'g' },
                            { name: 'h', code: 'h' },
                            { name: 'j', code: 'j' },
                            { name: 'k', code: 'k' },
                            { name: 'l', code: 'l' },
                            { name: ';', code: ';' },
                            { name: '\'', code: '\'' },
                        ].map((element) => (
                            <Button
                                onClick = { () => setInputMessageKeyboardRedux(element.code) }
                                { ...KeyboardButton }>{element.name}
                            </Button>
                        ))}
                        <Button
                            onClick = { () => onSubmitButton() }
                            { ...KeyboardButton }>Enter
                        </Button>
                    </GridContainer>
                    <GridContainer template = 'repeat(11, 1fr)'>
                        {[
                            { name: 'Shift', code: 'Shift' },
                            { name: 'z', code: 'z' },
                            { name: 'x', code: 'x' },
                            { name: 'c', code: 'c' },
                            { name: 'v', code: 'v' },
                            { name: 'b', code: 'b' },
                            { name: 'n', code: 'n' },
                            { name: 'm', code: 'm' },
                            { name: ',', code: ',' },
                            { name: '.', code: '.' },
                            { name: '/', code: '/' },
                        ].map((element) => (
                            <Button
                                onClick = { () => setInputMessageKeyboardRedux(element.code) }
                                { ...KeyboardButton }>{element.name}
                            </Button>
                        ))}
                    </GridContainer>
                    <GridContainer template = 'repeat(3, 1fr) minmax(auto, 500px)'>
                        {[
                            { name: 'Ctrl', code: 'Control' },
                            { name: 'Win', code: 'Win' },
                            { name: 'Alt', code: 'Alt' },
                        ].map((element) => (
                            <Button
                                onClick = { () => setInputMessageKeyboardRedux(element.code) }
                                { ...KeyboardButton }>{element.name}
                            </Button>
                        ))}
                        <Button
                            onClick = { () => setInputMessageKeyboardRedux(' ') }
                            { ...KeyboardButton }>Space
                        </Button>
                    </GridContainer>
                </Container>
            </div>
        </Card>
    );
};
