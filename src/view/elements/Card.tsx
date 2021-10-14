// Core
import React, { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

// Types
interface PropTypes {
    children: ReactElement | Array<ReactElement> | string | null;
    height?: string;
    width?: string;
    transformationWhen?: string
}

// Styles
const Styled = styled.div<PropTypes>`
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.card.primary};
    height: ${({ height }) => height ?? 'auto'};
    width: ${({ width }) => width ?? 'auto'};
    ${({ transformationWhen }) => transformationWhen
        ? css`
        @media (max-width: ${transformationWhen}) {
        width: 90vw;
        }
    ` : null }
`;

export const Card: FC<PropTypes> = ({ children, ...otherProps }) => {
    return (
        <Styled
            { ...otherProps }>
            {children}
        </Styled>
    );
};
