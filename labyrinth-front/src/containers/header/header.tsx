import React from 'react';
import styled from 'styled-components';

import { colors } from 'utils';
import { LogoSVG } from 'components';
// import { ThemeProvider } from 'styled-components';
// import { MuiThemeProvider } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 4rem;
  background-color: ${colors.gray0};
  box-shadow: 0 2px 2px 3px ${colors.gray20};
  width: 100%;
  font-weight: bold;
`;

const StyledLogoSVG = styled(LogoSVG)`
  margin-right: 1rem;
`;

export const Header: React.FC<any> = () => {
  return (
    <HeaderContainer>
      <StyledLogoSVG size={32} />
      Labyrinth
    </HeaderContainer>
  );
};
