// Core
import styled from 'styled-components';

export const KeyboardButton = styled.button``;

// Types
type GridContainerTypes = {
    template: string
}

export const Container = styled.div`
    @media (max-width: 490px) {
        display: none;
    }
`;

export const GridContainer = styled.div<GridContainerTypes>`
    display: grid;
    ${({ template }) => ({
        gridTemplateColumns: template,
    })}
`;
