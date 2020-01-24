import React from 'react';
import styled from 'styled-components';

import { colors, transition } from 'utils';

const InnerPath = styled.path`
  stroke: ${colors.blue90};
  transition: stroke ${transition.average};
`;

const OuterPath = styled.path`
  stroke: ${colors.blue90};
  transition: stroke ${transition.average};
`;

const Logo = styled.svg`
  &:hover ${OuterPath} {
    stroke: ${colors.blue70};
  }

  &:hover ${InnerPath} {
    stroke: ${colors.blue70};
  }
`;

export const LogoSVG = ({ className, size, onClick }: { className?: string; size: number; onClick?: () => any }) => (
  <React.Fragment>
    <Logo
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-labelledby="title"
      role="img"
      width={size}
      height={size}
      onClick={onClick}
    >
      <title>Destination Map</title>
      <InnerPath
        d="M43.1 17l9.9 9.9M43 27l9.9-9.9m-19.5 7.6a10 10 0 0 1 6.8-2.7M29.7 35.2a10 10 0 0 0 .5-2.9V32a10 10 0 0 1 .9-4.3M21.2 42a10 10 0 0 0 6.6-3.5M9.8 42h7.6M2 42h4"
        stroke-width="2"
        stroke-miterlimit="10"
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="butt"
      />
      <OuterPath
        d="M62 10v50l-22-6-16 6-22-6V4l22 6 16-6 22 6z"
        stroke-width="2"
        stroke-miterlimit="10"
        fill="none"
        data-name="layer1"
        stroke-linejoin="round"
        stroke-linecap="butt"
      />
    </Logo>
  </React.Fragment>
);