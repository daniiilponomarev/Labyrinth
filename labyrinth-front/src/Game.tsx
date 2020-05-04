import React from 'react';
import { map, values } from 'ramda';
import Particles from 'react-particles-js';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createMuiTheme, MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

import { colors, sizes, media } from 'utils';
import { Board, Header, Footer } from 'containers';

const GlobalStyle: any = createGlobalStyle`
html {
  /* 1rem = 10px */
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  color: ${colors.blue90};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;

// TODO: change to this layout: https://habr.com/ru/post/479580/
const AppWrapper = styled.div`
  position:relative;
  display: grid;
  grid-template: 1fr 3rem / 100%;
  height: 100%;
  min-height: 100vh;
  // background: ${colors.gray30};
`;

const theme = {
  breakpoints: map(item => `${item}em`, values(sizes))
};

const muiTheme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: { padding: 0, color: colors.gray70 }
    },
    MuiButton: {
      root: { minWidth: 'none' }
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
    htmlFontSize: 10,
    // useNextVariants: true,
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

// TODO: make moving boards within screen width changing with flex or grid. Try to move without media queries
// TODO: add .properties file to every component
const BoardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 1rem;
  // display: grid;
  // grid-template-rows: repeat(2, 1fr);
  // row-gap: 1rem;
  // align-items: center;
  // justify-items: center;
  ${media.desktop`
    flex-flow: row;
    // grid-template-columns: repeat(2, 1fr);
    // grid-column-gap: 1rem;
    // grid-template-rows: none;
  `};
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  padding: 4rem 0 3rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${colors.gray30};
  z-index: -1;
`;

const StyledBoard = styled(Board)`
  margin: 1rem;
  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-template-rows: none;
  `};
`;

export const Game: React.FC<{}> = () => {
  return (
    <AppWrapper className="App">
      <GlobalStyle whiteColor={true} />
      <StylesProvider injectFirst={true}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <StyledParticles
              params={{
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: false
                    }
                  },
                  color: { value: colors.blue70 },
                  shape: {
                    type: 'circle'
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      speed: 4,
                      size_min: 0.3
                    }
                  },
                  line_linked: {
                    enable: false
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    random: true
                  }
                }
              }}
            />
            <Header />
            <BoardsContainer>
              <StyledBoard />
              <StyledBoard />
            </BoardsContainer>
            <Footer />
          </MuiThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </AppWrapper>
  );
};
