import React from 'react';
import { map, values } from 'ramda';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { colors, sizes } from 'common';
import { Board } from 'containers/board';

const GlobalStyle: any = createGlobalStyle`
@import-normalize; /* bring in normalize.css styles */

html {
  /* 1rem = 10px */
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;

const AppWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(${colors.gray10}, ${colors.gray0});
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

const BoardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Game: React.FC<{}> = () => {
  return (
    <AppWrapper className="App">
      <GlobalStyle whiteColor={true} />
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <BoardsContainer>
            <Board />
          </BoardsContainer>
        </MuiThemeProvider>
      </ThemeProvider>
    </AppWrapper>
  );
};
