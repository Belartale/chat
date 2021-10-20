// Core
import React, { ChangeEvent, FC, useRef, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';
import { useInputMessageRedux } from '../../../bus/client/inputMessageKey';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Container
import { ContainerCenter } from '../../container';

// Elements
import { Button, Card, Input } from '../../elements';

// Components
import { Keyboard } from '../';

// Hooks
import { useValidation } from '../../../tools/hooks';

// Utils
import { getSliceDate } from '../../../tools/utils';

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


export const Chat: FC = () => {
    const refWindowChat = useRef(null);
    const { togglersRedux, setTogglerListenerAction } = useTogglersRedux();

    const { user, scrollWindowChat } = useUser({ scrollWindowChatCurrent: refWindowChat.current });
    const { messages, createMessage, deleteMessage, changeMessage } = useMessages();
    const {
        inputMessageRedux,
        setInputMessageRedux,
    } = useInputMessageRedux();
    const { isValidation, handleValidation } = useValidation(inputMessageRedux);

    const [ isIdChangeMessage, setIsIdChangeMessage ] = useState<boolean | string>(false);

    const onSubmitButton = () => {
        createMessage({ text: inputMessageRedux, username: user.username });
        setInputMessageRedux('');
        handleValidation(null);
        scrollWindowChat(refWindowChat.current);
    };

    const onChangeButton = () => {
        if (typeof isIdChangeMessage === 'string') {
            changeMessage({ _id: isIdChangeMessage, text: inputMessageRedux });
            setIsIdChangeMessage(false);
            setInputMessageRedux('');
            handleValidation(null);
            scrollWindowChat(refWindowChat.current);
        }
    };

    const onHandleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMessageRedux(event.target.value);
        handleValidation(inputMessageRedux);
    };

    return (
        <Card
            height = '75vh'
            transformationWhen = '576px'
            width = '500px'>
            <ContainerStyled>
                <WindowChat ref = { refWindowChat }>
                    {messages.map((message) => {
                        let comparisonNames = user.username === message.username;
                        let comparisonNamesFalse = user.username !== message.username;

                        return (
                            <Message
                                isOwner = { String(comparisonNames) }
                                key = { message._id }>
                                <MessageBody isOwner = { String(comparisonNames) }>
                                    <ContainerCenter justifyContent = { comparisonNamesFalse ? 'space-between' : 'flex-end' }>
                                        {comparisonNamesFalse
                                            ? <MessageUserName>{message.username}</MessageUserName> : null}
                                        {comparisonNames ? (
                                            <ContainerCenter>
                                                <Button
                                                    variant =  'primary'
                                                    onClick = { () => {
                                                        setIsIdChangeMessage(false);
                                                        setInputMessageRedux('');
                                                        deleteMessage(message._id);
                                                    } }>
                                                    Delete
                                                </Button>
                                                <Button
                                                    style = {{ marginLeft: '10px' }}
                                                    variant = 'primary'
                                                    onClick = { () => {
                                                        setIsIdChangeMessage(message._id);
                                                        setInputMessageRedux(message.text);
                                                    } }>
                                                    Change
                                                </Button>
                                            </ContainerCenter>
                                        ) : null}
                                    </ContainerCenter>
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
                        );
                    }).reverse()
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
                        <Button
                            disabled = { !isValidation }
                            padding = '5px 10px'
                            variant = 'primary'
                            onClick = { isIdChangeMessage ? onChangeButton : onSubmitButton }>
                            {isIdChangeMessage ? 'CHANGE' : 'SEND'}
                        </Button>
                        <Button
                            mediaMaxWith = '490px'
                            padding = '5px 10px'
                            style = {{ marginLeft: '5px' }}
                            variant = 'primary'
                            onClick = { () => setTogglerListenerAction({ type: 'isKeyboard' }) }>
                            Keyboard
                        </Button>

                    </ContainerCenter>
                </form>
                {togglersRedux.isKeyboard
                    ? (
                        <Keyboard
                            isIdChangeMessage = { isIdChangeMessage }
                            isValidation = { isValidation }
                            onChangeButton = { onChangeButton }
                            onSubmitButton = { onSubmitButton }
                        />
                    ) : null}
            </ContainerStyled>
        </Card>
    );
};
