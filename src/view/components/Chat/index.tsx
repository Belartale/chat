// Core
import React, { ChangeEvent, FC, useRef, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

// Container
import { ContainerCenter } from '../../container';

// Elements
import { Button, Card, Input } from '../../elements';

// Tools
import { useForm, useValidation } from '../../../tools/hooks';

// Utils
import { getSliceDate, useToggleUseState } from '../../../tools/utils';

// Types
import { TextChatForm } from '../../../bus/user/types';

// Styles
import {
    ContainerStyled,
    Message,
    MessageBody,
    MessageChanged,
    MessageDate,
    MessageDetails,
    MessageText,
    MessageUserName,
    WindowChat,
} from './styles';
import { Keyboard } from '../';
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';

export const Chat: FC = () => {
    const refWindowChat = useRef(null);
    const { isToggle, handleToggle } = useToggleUseState();

    const { user, scrollWindowChat } = useUser({ scrollWindowChatCurrent: refWindowChat.current });
    const { messages, createMessage } = useMessages();
    const {
        inputMessageRedux,
        setInputMessageAction,
        setInputMessageOneSymbolAction,
    } = useInputMessageRedux();
    const { isValidation, handleValidation } = useValidation(!!inputMessageRedux);
    // для клавы
    // const [ keyPressState, setKeyPressState ] = useState<string | null>(null);

    const onSubmitButton = () => {
        createMessage({ text: inputMessageRedux, username: user.username });
        setInputMessageAction('');
        handleValidation(null);
        scrollWindowChat(refWindowChat.current);
    };

    const onHandleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMessageAction(event.target.value);
        handleValidation(inputMessageRedux);
    };

    //! Если мышка на WindowChat скрол отменить/ onMousEnter / onMousLeave
    return (
        <>
            <Card
                height = '75vh'
                transformationWhen = '576px'
                width = '500px'>
                <ContainerStyled>
                    <WindowChat ref = { refWindowChat }>
                        {messages.map((message) => (
                            <Message
                                isOwner = { String(user.username === message.username) }
                                key = { message._id }>
                                <MessageBody isOwner = { String(user.username === message.username) }>
                                    <MessageUserName>{message.username}</MessageUserName>
                                    <MessageText>{message.text}</MessageText>
                                    <MessageDetails direction = { String(message.createdAt === message.updatedAt) }>
                                        {
                                            message.createdAt === message.updatedAt
                                                ? null
                                                : (
                                                    <MessageChanged>
                                                        Changed
                                                    </MessageChanged>
                                                )
                                        }

                                        <MessageDate>
                                            {getSliceDate(message.createdAt)}
                                        </MessageDate>
                                    </MessageDetails>
                                </MessageBody>
                            </Message>
                        )).reverse()
                        }
                    </WindowChat>
                    <form onSubmit = { (event) => event.preventDefault() }>
                        <ContainerCenter justifyContent = 'space-between'>
                            <Input
                                containerWidth = '100%'
                                direction = 'row'
                                name = 'text'
                                style = {{ marginRight: '20px' }}
                                type = 'text'
                                value = { inputMessageRedux }
                                onChange = { (event) => onHandleInput(event) }
                            />
                            {/* onKeyPress = { (event) => setKeyPressState(event.nativeEvent.key ?? null) } */}
                            <Button
                                disabled = { !isValidation }
                                padding = '5px 10px'
                                variant = {  'submit primary' }
                                onClick = { onSubmitButton }>
                                SEND
                            </Button>
                            <Button
                                mediaMaxWith = '490px'
                                padding = '5px 10px'
                                style = {{ marginLeft: '5px' }}
                                variant = { 'submit primary' }
                                onClick = { handleToggle }>
                                Keyboard
                            </Button>

                        </ContainerCenter>
                    </form>
                </ContainerStyled>
            </Card>
            <Card>
                {isToggle ? <Keyboard/> : null}
            </Card>
        </>
    );
};
//!  onClick = { handleToggle } исправить на false

