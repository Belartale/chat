// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, FormRegister } from '../../components';
import { ContainerCenter } from '../../container';

//! Styles
// import { Container } from './styles';

const Main: FC = () => {
    return (
        <ContainerCenter>
            <FormRegister/>
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
