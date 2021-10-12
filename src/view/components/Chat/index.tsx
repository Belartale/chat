// Core
import React, { ChangeEvent, FC } from 'react';

// Bus


// Container
import { ContainerCenter } from '../../container';

// Elements
import { Button, Card, Input } from '../../elements';

// Tools
import { useForm } from '../../../tools/hooks';

// Types
import { TextChatForm } from '../../../bus/user/types';

// Styles
import { Form } from './styles';

export const Chat: FC = () => {
    const [ form, handleChange ] = useForm<TextChatForm>({ text: null, username: null });


    const onSumbitBtn = () => {
        console.log('chatSUMBIT');
    };

    return (
        <Card
            height = '600px'
            width = '300px'>
            <Form onSubmit = { (event) => event.preventDefault() }>
                <div style = {{ width: '300px' }}>
                    weidow Chat
                </div>
                <div>
                    <Input
                        direction = 'row'
                        id = 'text'
                        label = 'text'
                        name = 'text'
                        type = 'text'
                        value = { form.text ?? '' }
                        onChange = { (event: ChangeEvent<HTMLInputElement>) => void handleChange(event, false) }
                    />
                    <ContainerCenter style = {{ marginTop: '10px' }}>
                        <Button
                            type = 'submit'
                            onClick = { onSumbitBtn }>INTRO HOLE
                        </Button>
                    </ContainerCenter>
                </div>
            </Form>
        </Card>
    );
};

