// Core
import React, { FC, DetailedHTMLProps, Ref, ReactElement } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>;
    children: ReactElement | string;
    width?: string;
    padding?: string;
    variant?: string;
}

// Styles
const Styled = styled.button<PropTypes>`
    width: ${ ({ width }) => width ? width : 'auto'};
    padding: ${ ({ padding }) => padding ? padding : '0px 10px'};
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    ${({ variant, theme }) => variant === 'submit primary' ? {
        border:       `1px solid ${theme.button.primary}`,
        [ ':hover' ]: {
            backgroundColor: theme.button.primary,
        },
    } : null}
    ${({ variant, theme }) => variant === 'submit secondary' ? {
        border:       `1px solid ${theme.button.secondary}`,
        [ ':hover' ]: {
            backgroundColor: theme.button.secondary,
        },
    } : null}
    &:active {
        background-color: ${({ theme }) => theme.button.active};
    }
`;

export const Button: FC<PropTypes> = ({ children, ...otherProps }) => {
    return (
        <Styled
            { ...otherProps }>
            {children}
        </Styled>
    );
};
