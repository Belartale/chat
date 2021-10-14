// Core
import React, { FC, SyntheticEvent, useEffect } from 'react';
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';

// Elements
import { Button } from '../../elements';

// Style
import { GridContainer, GridContainerOne, GridContainerThree, GridContainerTwo, KeyboardButton } from './styles';

// Types
interface KeyboardTypes {
    // setKeyPressState?: Function
    keyPressState?: string | null
}

interface sss extends EventListener { target: { id: string } }


export const Keyboard: FC<KeyboardTypes> = ({ keyPressState }) => {
    const { setInputMessageAction } = useInputMessageRedux();
    //!
    const eventPpess = (event: any) => {
        console.log(event.target.id);
    };

    useEffect(() => {
        document.addEventListener('keypress', eventPpess);

        return () => {
            document.removeEventListener('keypress', eventPpess);
        };
    });

    const KeyboardButton = {
        variant: 'submit primary',
    };

    return (
        <div>

            {/* <GridContainer>
                {[
                    { name: 'Exc', code: '27' },
                    { name: '`', code: '192' },
                    { name: '1', code: '23' },
                    { name: '2', code: '49' },
                    { name: '3', code: '' },
                    { name: '4', code: '' },
                    { name: '5', code: '' },
                    { name: '6', code: '' },
                    { name: '7', code: '' },
                    { name: '8', code: '' },
                    { name: '9', code: '' },
                    { name: '0', code: '' },
                    { name: '-', code: '' },
                    { name: '=', code: '' },
                    { name: '<=', code: '' },
                    { name: 'Tab', code: '' },
                    { name: 'q', code: '' },
                    { name: 'w', code: '' },
                    { name: 'e', code: '' },
                    { name: 'r', code: '' },
                    { name: 't', code: '' },
                    { name: 'y', code: '' },
                    { name: 'u', code: '' },
                    { name: 'i', code: '' },
                    { name: 'o', code: '' },
                    { name: 'p', code: '' },
                    { name: '[', code: '' },
                    { name: ']', code: '' },
                    { name: '/', code: '' },
                    { name: 'Caps', code: '' },
                    { name: 'a', code: '' },
                    { name: 's', code: '' },
                    { name: 'd', code: '' },
                    { name: 'f', code: '' },
                    { name: 'g', code: '' },
                    { name: 'h', code: '' },
                    { name: 'j', code: '' },
                    { name: 'k', code: '' },
                    { name: 'l', code: '' },
                    { name: ';', code: '' },
                    { name: '\'', code: '' },
                    { name: 'Enter', code: '' },
                ].map((element) => (
                    <Button
                        { ...KeyboardButton }
                        id = { element.code }>{element.name}
                    </Button>
                ))}
            </GridContainer> */}

            <GridContainerOne>
                {[
                    { name: 'Exc', code: '2' },
                    { name: '`', code: '' },
                    { name: '1', code: '23' },
                    { name: '2', code: '' },
                    { name: '3', code: '' },
                    { name: '4', code: '' },
                    { name: '5', code: '' },
                    { name: '6', code: '' },
                    { name: '7', code: '' },
                    { name: '8', code: '' },
                    { name: '9', code: '' },
                    { name: '0', code: '' },
                    { name: '-', code: '' },
                    { name: '=', code: '' },
                    { name: '<=', code: '' },
                ].map((element) => (
                    <Button
                        { ...KeyboardButton }
                        id = { element.code }>{element.name}
                    </Button>
                ))}
            </GridContainerOne>
            <GridContainerTwo>
                {[
                    { name: 'Tab', code: '' },
                    { name: 'q', code: '' },
                    { name: 'w', code: '' },
                    { name: 'e', code: '' },
                    { name: 'r', code: '' },
                    { name: 't', code: '' },
                    { name: 'y', code: '' },
                    { name: 'u', code: '' },
                    { name: 'i', code: '' },
                    { name: 'o', code: '' },
                    { name: 'p', code: '' },
                    { name: '[', code: '' },
                    { name: ']', code: '' },
                    { name: '/', code: '' },
                ].map((element) => <Button { ...KeyboardButton }>{element.name}</Button>)}
            </GridContainerTwo>
            <GridContainerThree>
                {[
                    { name: 'Caps', code: '' },
                    { name: 'a', code: '' },
                    { name: 's', code: '' },
                    { name: 'd', code: '' },
                    { name: 'f', code: '' },
                    { name: 'g', code: '' },
                    { name: 'h', code: '' },
                    { name: 'j', code: '' },
                    { name: 'k', code: '' },
                    { name: 'l', code: '' },
                    { name: ';', code: '' },
                    { name: '\'', code: '' },
                    { name: 'Enter', code: '' },
                ].map((element) => <Button { ...KeyboardButton }>{element.name}</Button>)}
            </GridContainerThree>
            {/* {[
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
                { name: '', code: '' },
            ].map((element) => <div>{element}</div>)} */}
        </div>
    );
};

// { [ {name: '', code: ''}, {name: '', code: ''}, {name: '', code: ''}, {name: '', code: ''}, {name: '', code: ''}, {name: '', code: ''}, {name: '', code: ''}, {name: '', code: ''}, ].map((element) => <div>{element}</div>) }

// { ['Esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Blackspace'].map((element) => <div>{element}</div>) }
// { ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\'', 'Del'].map((element) => <div>{element}</div>) }
// { ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '', '', '', '', ''].map((element) => <div>{element}</div>) }
// { ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '', '', '', '', '', '', '', '', ''].map((element) => <div>{element}</div>) }
