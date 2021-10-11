// Core
import React, { FC, DetailedHTMLProps, Ref, ReactElement } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    ref?: Ref<HTMLButtonElement>;
    children: ReactElement | string;
    width?: string;
    padding?: string;
}

// Styles
const Styled = styled.button<PropTypes>`
    padding: ${ ({ padding }) => padding ? padding : '0px 10px'};
    width: ${ ({ width }) => width ? width : 'auto'};
    cursor: pointer;
`;

export const Button: FC<PropTypes> = ({ children, ...otherProps }) => {
    return (
        <Styled
            { ...otherProps }>
            {children}
        </Styled>
    );
};
