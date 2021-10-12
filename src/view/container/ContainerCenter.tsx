// Core
import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes {
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    fullHeight?: boolean;
    style?: object;
    children: ReactElement | Array<ReactElement> | string | Array<ReactElement> & string;
}

const ContainerCenterStyled = styled.div<PropTypes>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'row'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    height: ${({ fullHeight }) => fullHeight ? '100%' : 'auto'};
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

