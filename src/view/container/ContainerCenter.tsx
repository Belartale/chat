// Core
import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes {
    alignItems?: string;
    justifyContent?: string;
    style?: object;
    children: ReactElement | string;
}

const ContainerCenterStyled = styled.div<PropTypes>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    height: 100%;
`;

export const ContainerCenter: FC<PropTypes> = ({ children, style, ...props }) => {
    return (
        <ContainerCenterStyled
            style = { style }
            { ...props }>
            {children}
        </ContainerCenterStyled>
    );
};

