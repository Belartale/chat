// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, FormRegister } from '../../components';

// Container
import { ContainerCenter } from '../../container';

//! Styles
// import { Container } from './styles';

const Register: FC = () => {
    return (
        <ContainerCenter fullHeight>
            <FormRegister/>
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
