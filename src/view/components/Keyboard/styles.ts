// Core
import styled from 'styled-components';

export const KeyboardButton = styled.button``;

// Types
type GridContainerTypes = {
    template: string
    order?: number
    style?: object
}

export const Container = styled.div`
    @media (max-width: 490px) {
        display: none;
    }
`;

export const GridContainer = styled.div<GridContainerTypes>`
    display: grid;
    ${({ template, order }) => ({
        gridTemplateColumns: template,
        order:               order,
    })}
`;
