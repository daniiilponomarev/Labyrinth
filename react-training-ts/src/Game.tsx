import React from 'react';
import { map, values } from 'ramda';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { colors, sizes} from './common';

import logo from './logo.svg';
import './Game.css';

const GlobalStyle = createGlobalStyle`
`;

const theme = {
  breakpoints: map(item => `${item}em`, values(sizes))
};

const muiTheme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: { padding: 0, color: colors.gray70 }
    },
    MuiOutlinedInput: {
      root: { background: colors.gray10, boxSizing: 'border-box', borderRadius: 4 }
    },
    MuiSvgIcon: {
      root: { color: colors.gray70 }
    }
  },
  palette: {
    // type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: colors.blue80
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      contrastText: '#ffcc00',
      // dark: will be calculated from palette.secondary.main,
      light: '#0066ff',
      main: '#0044ff'
    }
    // error: will use the default color
  },
  typography: {
    fontSize: 12,
    htmlFontSize: 10
    // useNextVariants: true,
  }
});

export const Game: React.FC = () => {
  return (
    <div className="App">
      {/*<GlobalStyle whiteColor />*/}
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
};
