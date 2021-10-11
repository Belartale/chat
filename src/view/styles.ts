// Core
import styled from 'styled-components';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.backgroundPage.primary}
`;
