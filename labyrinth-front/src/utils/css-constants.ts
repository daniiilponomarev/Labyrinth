export const colors = {
  blue0: '#deebff',
  blue10: '#a4c5fb',
  blue20: '#6da1f4',
  blue30: '#3f7fea',
  blue40: '#1b63db',
  blue50: '#044bc6',
  blue60: '#003daa',
  blue70: '#003088',
  blue80: '#00215f',
  blue90: '#001236',

  gray0: '#ffffff',
  gray10: '#fafafa',
  gray20: '#f2f2f2',
  gray30: '#e6e6e6',
  gray40: '#d3d3d3',
  gray50: '#bababa',
  gray60: '#999999',
  gray70: '#6f6f6f',
  gray80: '#3f3f3f',
  gray90: '#0d0d0d',

  white: '#f5f5f5'
};

export const outerHexagonColor = 'transparent';
export const outerHexagonDisabledColor = colors.blue70;
export const innerHexagonActiveEnabledColor = colors.blue70;
export const innerHexagonInactiveEnabledColor = colors.blue90;
export const innerHexagonActiveDisabledColor = 'transparent';
export const innerHexagonInactiveDisabledColor = 'transparent';
export const innerHexagonHoverColor = colors.blue50;

export const sizes: { mobile: number; tablet: number; desktop: number } = {
  mobile: 32,
  tablet: 52,
  desktop: 64
};

export const zIndexes = {
  wall: 1,
  innerHexagon: 2,
  header: 5,
  footer: 5
};

export const transition = { average: '0.3s', long: '2s' };

export const positions = { top: 'top', bottom: 'bottom', left: 'left', right: 'right' };
