// Core
import React, { DetailedHTMLProps, FC, Ref } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    direction?: string;
    color?: string;
    ref?: Ref<HTMLInputElement>;
    containerWidth?: string;
}

interface ContainerProps {
    direction?: string;
    containerWidth?: string;
}

// Styles
const Container = styled.div<ContainerProps>`
    ${({ containerWidth }) => containerWidth ? { width: containerWidth } : null }
    display: flex;
    ${ ({ direction }) => direction === 'column' ? { flexDirection: 'column' } : { flexDirection: 'row' }}
`;

const InputStyled = styled.input<PropTypes>`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ color }) => color ? color : 'black'};
    color: ${({ color }) => color ? color : 'black'};
    ${ ({ direction }) => direction === 'column' ? { marginTop: '10px' } : { marginLeft: '10px' }}
`;

export const Input: FC<PropTypes> = ({ label, id, name, direction, containerWidth, ...otherProps }) => {
    return (
        <Container
            containerWidth = { containerWidth }
            direction = { direction } >
            {label ? <label htmlFor = { id || name }>{label}</label> : null}
            <InputStyled
                direction = { direction }
                id = { id || name }
                name = { name }
                { ...otherProps }
            />
        </Container>
    );
};
