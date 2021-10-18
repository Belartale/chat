// Core
import React, { ChangeEvent, FC } from 'react';
import { v4 } from 'uuid';

// Bus
import { useUser } from '../../../bus/user';
import { UserForm } from '../../../bus/user/types';

// Hooks
import { useForm } from '../../../tools/hooks';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, Card, Input } from '../../elements';

// Container
import { ContainerCenter } from '../../container';

const Register: FC = () => {
    const [ form, handleChange ] = useForm<UserForm>({ username: `RAT:${v4().slice(0, 5)}` });
    const { registerUser } = useUser();


    return (
        <ContainerCenter fullHeight>
            <Card>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <Input
                        direction = 'column'
                        id =  'username'
                        label =  'username'
                        name =  'username'
                        type = 'text'
                        value = { form.username ?? '' }
                        onChange = { (event: ChangeEvent<HTMLInputElement>) => void handleChange(event, false) }
                    />
                    <ContainerCenter
                        fullHeight
                        style = {{ marginTop: '10px' }}>
                        <Button
                            padding = '5px 10px'
                            type = 'submit'
                            variant = 'primary'
                            onClick = { () => registerUser(form) }>INTRO HOLE
                        </Button>
                    </ContainerCenter>
                </form>
            </Card>
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
