// Core
import React, { FC, AriaAttributes } from 'react';
import styled from 'styled-components';

// Bus
import { useUser } from '../../bus/user';

// Types
interface PropTypes extends AriaAttributes {}

// Styles
const Styled = styled.div<PropTypes>`
color: ${({ theme }) => theme.text.textStandard};
`;

export const ShowUserName: FC<PropTypes> = ({ ...otherProps }) => {
    const { user } = useUser();

    return (
        <Styled
            { ...otherProps }>
            <h2>Welcome, {user.username}</h2>
        </Styled>
    );
};
