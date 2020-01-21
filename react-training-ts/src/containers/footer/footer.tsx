import React from 'react';
import styled from 'styled-components';
import { map } from 'ramda';

// import Card from '@material-ui/core/Card/index';
// import CardMedia from '@material-ui/core/CardMedia/index';
// import CardContent from '@material-ui/core/CardContent/index';
// import Typography from '@material-ui/core/Typography/index';

import { colors } from 'utils';
import { Cell } from 'containers/cell';
// import { LogoSVG } from '../../components/common-components';
// import { ThemeProvider } from 'styled-components';
// import { MuiThemeProvider } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${colors.gray50};
  // background: linear-gradient(${colors.gray50}, ${colors.gray40});
`;

export const Footer: React.FC<any> = () => {
  return (
    <FooterContainer>
      Made by Daniil, 2020
    </FooterContainer>
  );
};
