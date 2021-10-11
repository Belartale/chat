// Core
import React, { DetailedHTMLProps, FC } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends StyledInputProps, DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement> {
    label?: string;
    error?: object;
    id: string;
    name: string;
    color?: string;
}

type StyledInputProps = {
    direction?: string;
}

// Styles
const Container = styled.div<StyledInputProps>`
    display: flex;
    ${ ({ direction }) => direction === 'column' ? { flexDirection: 'column' } : { flexDirection: 'row' }}
`;

const InputStyled = styled.input<StyledInputProps>`
    width: auto;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ color }) => color ? color : 'black'};
    color: ${({ color }) => color ? color : 'black'};
    ${ ({ direction }) => direction === 'column' ? { marginTop: '10px' } : { marginLeft: '10px' }}
`;

const TextError = styled.p`
    color: #9E0016;
`;
//! error
export const Input: FC<PropTypes> = ({ label, error, id, name, direction, color, onChange }) => {
    return (
        <>
            <Container direction = { direction }>
                {label ? <label htmlFor = { id || name }>{label}</label> : null}
                <InputStyled
                    className = { `${error ? 'red' : ''}` }
                    color = { color }
                    direction = { direction }
                    id = { id || name }
                    type = 'text'
                    onChange = { onChange }
                />
            </Container>
            <div>
                {error ? <TextError>{error}</TextError> : null }
            </div>
        </>
    );
};
