// Core
import React, { FC, DetailedHTMLProps, Ref, ReactNode } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>;
    children: ReactNode;
    width?: string;
    padding?: string;
    variant?: string;
    mediaMaxWith?: string;
    style?: object;
    active?: boolean;
}

// Styles
const Styled = styled.button<PropTypes>`
    width: ${ ({ width }) => width ? width : 'auto'};
    padding: ${ ({ padding }) => padding ? padding : '0px 10px'};
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;

    ${({ variant, theme }) => variant === 'primary' ? {
        border:       `1px solid ${theme.button.primary}`,
        [ ':hover' ]: {
            backgroundColor: theme.button.primary,
        },
    } : null}

    ${({ variant, theme }) => variant === 'secondary' ? {
        border:       `1px solid ${theme.button.secondary}`,
        [ ':hover' ]: {
            backgroundColor: theme.button.secondary,
        },
    } : null}

    &:active {
        background-color: ${({ theme }) => theme.button.active};
    }

    ${({ mediaMaxWith }) => mediaMaxWith ? {
        [ `@media (max-width: ${mediaMaxWith})` ]: {
            display: 'none',
        },
    } : null}

    ${({ active, theme }) => active ? { backgroundColor: theme.button.active } : null}

    
`;

export const Button: FC<PropTypes> = ({ style, children, ...otherProps }) => {
    return (
        <Styled
            style = { style }
            { ...otherProps }>
            {children}
        </Styled>
    );
};
