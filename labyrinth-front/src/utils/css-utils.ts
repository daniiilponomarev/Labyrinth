import { css } from 'styled-components';
import { sizes } from './css-constants';

export const media: {mobile?: any; tablet?: any; desktop?: any} = Object.keys(sizes).reduce((acc, label: string) => {
  // @ts-ignore
  const remSize = sizes[label];

  // @ts-ignore
  acc[label] = (...args: [any]) => css`
    @media (min-width: ${remSize}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
