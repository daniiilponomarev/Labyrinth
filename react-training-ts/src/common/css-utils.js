import { css } from 'styled-components';

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

  // gray: '#c9c9c9',
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

export const sizes = {
  mobile: 32,
  tablet: 52,
  desktop: 64
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label];

  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
