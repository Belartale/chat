// Core
import React, { DetailedHTMLProps, FC, Ref } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    direction?: string;
    color?: string;
    ref?: Ref<HTMLInputElement>;
}

interface ContainerProps {
    direction?: string;
}

// Styles
const Container = styled.div<ContainerProps>`
    display: flex;
    ${ ({ direction }) => direction === 'column' ? { flexDirection: 'column' } : { flexDirection: 'row' }}
`;

const InputStyled = styled.input<PropTypes>`
    width: auto;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ color }) => color ? color : 'black'};
    color: ${({ color }) => color ? color : 'black'};
    ${ ({ direction }) => direction === 'column' ? { marginTop: '10px' } : { marginLeft: '10px' }}
`;

//todo error
// const TextError = styled.p`
//     color: #9E0016;
// `;

export const Input: FC<PropTypes> = ({ label, id, name, direction, ...otherProps }) => {
    return (
        <>
            <Container direction = { direction }>
                {label ? <label htmlFor = { id || name }>{label}</label> : null}
                <InputStyled
                    direction = { direction }
                    id = { id || name }
                    name = { name }
                    { ...otherProps }
                />
            </Container>
            {/* <div>
                {error ? <TextError>{error}</TextError> : null }
            </div> */}
        </>
    );
};
