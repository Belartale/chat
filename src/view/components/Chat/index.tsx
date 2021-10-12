// Core
import React, { ChangeEvent, FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

// Container
import { ContainerCenter } from '../../container';

// Elements
import { Button, Card, Input } from '../../elements';

// Tools
import { useForm } from '../../../tools/hooks';

// Utils
import { getSliceDate } from '../../../tools/utils';

// Types
import { TextChatForm } from '../../../bus/user/types';

// Styles
import {
    ContainerStyled,
    Form,
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
    const { user } = useUser();
    const { messages, createMessage } = useMessages();
    const [
        form,
        handleChange,
        setInitialForm,
    ] = useForm<TextChatForm>({ text: null, username: user.username });

    const onSubmitButton = () => {
        createMessage(form);
        setInitialForm({ text: '', username: user.username });
    };

    return (
        <Card
            height = '60vh'
            width = '500px'>
            <ContainerStyled>

                <WindowChat>
                    {messages.map((message) => (
                        <Message
                            isOwner = { user.username === message.username }
                            key = { message._id } >
                            <MessageBody isOwner = { user.username === message.username }>
                                <MessageUserName>{message.username}</MessageUserName>
                                <MessageText>{message.text}</MessageText>
                                <MessageDetails direction = { message.createdAt === message.updatedAt }>
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
                    )).reverse()}
                </WindowChat>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <ContainerCenter justifyContent = 'space-between'>
                        <Input
                            containerWidth = '100%'
                            direction = 'row'
                            id = 'text'
                            label = 'text'
                            name = 'text'
                            style = {{ marginRight: '20px' }}
                            type = 'text'
                            value = { form.text ?? '' }
                            onChange = { (event: ChangeEvent<HTMLInputElement>) => void handleChange(event, false) }
                        />
                        <Button
                            disabled = { !form.text }
                            type = 'submit'
                            onClick = { onSubmitButton }>SEND
                        </Button>

                    </ContainerCenter>
                </form>
            </ContainerStyled>
        </Card>
    );
};

