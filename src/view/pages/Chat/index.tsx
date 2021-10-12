// Core
import React, { FC } from 'react';
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, Chat as ChatComponent } from '../../components';
import { ContainerCenter } from '../../container';
import { Button, ShowUserName } from '../../elements';

const Chat: FC = () => {
    const { logoutUser } = useUser();

    return (
        <ContainerCenter
            flexDirection = 'column'
            justifyContent = 'space-around'>
            <div>
                <ShowUserName />
                <Button onClick = { logoutUser }>Logout</Button>
            </div>
            <ChatComponent/>
            <div>
                Клава
            </div>
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
