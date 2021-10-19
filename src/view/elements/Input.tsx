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

interface LabelStyledTypes extends DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    color?: string;
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

const LabelStyled = styled.label<LabelStyledTypes>`
    color: ${({ color, theme }) => color ? color : theme.text.textStandard};
`;

const InputStyled = styled.input<PropTypes>`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ color, theme }) => color ? color : theme.input.colorBorder};
    color: ${({ color, theme }) => color ? color : theme.text.textStandard};
    ${ ({ direction }) => direction === 'column' ? { marginTop: '10px' } : { marginLeft: '10px' }}
`;

export const Input: FC<PropTypes> = ({ label, id, name, direction, containerWidth, color, ...otherProps }) => {
    return (
        <Container
            containerWidth = { containerWidth }
            direction = { direction } >
            {
                label
                    ? (
                        <LabelStyled
                            color = { color }
                            htmlFor = { id || name }>{label}
                        </LabelStyled>
                    )
                    : null
            }
            <InputStyled
                color = { color }
                direction = { direction }
                id = { id || name }
                name = { name }
                { ...otherProps }
            />
        </Container>
    );
};
