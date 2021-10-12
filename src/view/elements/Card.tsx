// Core
import React, { FC, AriaAttributes, ReactElement } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends AriaAttributes {
    children: ReactElement | string;
    height?: string;
    width?: string;
}

// Styles
const Styled = styled.div<PropTypes>`
    padding: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.card.primary};
    height: ${({ height }) => height ?? 'auto'};
    width: ${({ width }) => width ?? 'auto'};
`;

export const Card: FC<PropTypes> = ({ children, ...otherProps }) => {
    return (
        <Styled
            { ...otherProps }>
            {children}
        </Styled>
    );
};
