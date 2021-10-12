// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { ContainerCenter } from '../../container';

const Chat: FC = () => {
    return (
        <ContainerCenter>
            Chat
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
