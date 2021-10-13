// Core
import React, { ChangeEvent, FC, useRef } from 'react';

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
import { getSliceDate } from '../../../tools/utils';

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


export const Chat: FC = () => {
    const refWindowChat = useRef(null);
    const { user, scrollWindowChat } = useUser({ scrollWindowChatCurrent: refWindowChat.current });
    const { messages, createMessage } = useMessages();
    const [
        form,
        handleChange,
        setInitialForm,
    ] = useForm<TextChatForm>({ text: null, username: user.username });
    const { isValidation, handleValidation } = useValidation(!!form.text);

    const onSubmitButton = () => {
        createMessage(form);
        setInitialForm({ text: '', username: user.username });
        handleValidation(null);
        scrollWindowChat(refWindowChat.current);
    };

    const onHandleButton = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange(event, false);
        handleValidation(event.target.value);
    };

    return (
        <Card
            height = '60vh'
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
                    {scrollWindowChat(refWindowChat.current)}
                </WindowChat>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <ContainerCenter justifyContent = 'space-between'>
                        <Input
                            containerWidth = '100%'
                            direction = 'row'
                            name = 'text'
                            style = {{ marginRight: '20px' }}
                            type = 'text'
                            value = { form.text ?? '' }
                            onChange = { (event: ChangeEvent<HTMLInputElement>) => onHandleButton(event) }
                        />
                        <Button
                            disabled = { !isValidation }
                            padding = '5px 10px'
                            type = 'submit'
                            variant = {  'submit primary' }
                            onClick = { onSubmitButton }>
                            SEND
                        </Button>

                    </ContainerCenter>
                </form>
            </ContainerStyled>
        </Card>
    );
};

