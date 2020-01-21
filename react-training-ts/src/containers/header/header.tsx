import React from 'react';
import styled from 'styled-components';
import { map } from 'ramda';

import { colors } from 'utils';
import { Cell } from 'containers/cell';
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
  background-color: #fff;
  box-shadow: 0 2px 2px 3px #f6f7f8;
  width: 100%;
  font-weight: bold;
`;

const StyledLogoSVG = styled(LogoSVG)`
  margin-right: 1rem;
`;

const StyledLogoText = styled.span`
  &:hover {
    stroke: ${colors.blue70};
  }
`;

export const Header: React.FC<any> = () => {
  return (
    <HeaderContainer>
      <StyledLogoSVG size={32} />
      Labyrinth
    </HeaderContainer>
  );
};
