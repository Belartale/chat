// Core
import React, { FC } from 'react';

// Bus
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, Chat as ChatComponent } from '../../components';

// Container
import { ContainerCenter } from '../../container';

// Elements
import { Button, ShowUserName } from '../../elements';

const Chat: FC = () => {
    const { logoutUser } = useUser();


    return (
        <ContainerCenter
            fullHeight
            flexDirection = 'column'
            justifyContent = 'space-around'>
            <ContainerCenter>
                <ShowUserName />
                <Button
                    padding = '5px 10px'
                    style = {{ marginLeft: '5px' }}
                    variant = 'submit secondary'
                    onClick = { logoutUser }>Logout
                </Button>
            </ContainerCenter>
            <ChatComponent />
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
