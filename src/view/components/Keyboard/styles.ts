// Core
import styled from 'styled-components';

// Types
type GridContainerTypes = {
    template: string
    order?: number
    style?: object
}

export const Container = styled.div`
    padding-top: 10px;
    @media (max-width: 490px) {
        display: none;
    }
    section:not(:last-child) {
        margin-bottom: 2px;
    }
`;

export const GridContainer = styled.section<GridContainerTypes>`
    display: grid;

    button {
        border-radius: 0px;
    }
    button:not(:first-child) {
        margin-left: 2px;
    }

    ${({ template, order }) => ({
        gridTemplateColumns: template,
        order:               order,
    })}
`;
