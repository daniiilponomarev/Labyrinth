import { css } from 'styled-components';
import { sizes } from './css-constants';

export const media = Object.keys(sizes).reduce((acc, label: string) => {
  // @ts-ignore
  const emSize = sizes[label];

  // @ts-ignore
  acc[label] = (...args: [any]) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
