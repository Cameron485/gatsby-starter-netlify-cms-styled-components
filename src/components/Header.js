import React from 'react';
import styled from 'styled-components';

import mediaSizes from '../helpers/breakPoints';

const StyledHeader = styled.header`
    height: 10vh;
    background-color: aliceblue;

    @media (max-width: ${mediaSizes.tablet}px) {
        height: 20vh;
        background-color: papayawhip;
    }
`;

const Header = () => (
    <StyledHeader>
        <p>I am header</p>
    </StyledHeader>
);

export default Header;
