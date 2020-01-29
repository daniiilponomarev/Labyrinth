// import React from 'react';
// import styled from 'styled-components';
// import { colors } from 'utils';
//
// fix types
// const wall = ({ className, size = 50, onClick }: { className?: string; size?: number; onClick?: () => any }) => {
//   const d1 = `M ${size / 4 / 2} 0
//          L ${size / 4} ${size * (1 / 8)}
//          L ${size / 4} ${size * (7 / 8)}
//          L ${size / 4 / 2} ${size}
//          Z`;
//   const d2 = `M ${size / 4 / 2} ${size}
//          L 0 ${size * (7 / 8)}
//          L 0 ${size * (1 / 8)}
//          L ${size / 4 / 2} 0
//          Z`;
//
//   return (
//     <svg className={className} viewBox={`0 0 ${size / 4} ${size}`} xmlns="http://www.w3.org/2000/svg" height={size}>
//       <path d={d1} />
//       <path d={d2} />
//     </svg>
//   );
// };
//
// const StyledWall = styled(wall)`
//   position: absolute;
//   fill: ${colors.blue90};
// `;
//
// const TopWall = styled(StyledWall)`
//   position: absolute;
//   width: 100%;
//   height: 1.5rem;
//   background: red;
// `;
//
// export const Wall = ({ side }: { side: string }) => {
//   return <StyledWall />;
//
//   switch (side) {
//     case 'top': {
//       return <TopWall />;
//     }
//     case 'bottom': {
//       return <StyledWall />;
//     }
//     default:
//       return null;
//   }
// };

import React from 'react';
import styled from 'styled-components';
import { colors, transition, zIndexes, positions } from 'utils';

const outerHexagonColor = colors.gray30;
const innerHexagonColor = colors.blue90;
const outerHexagonHoverColor = 'green';
const innerHexagonHoverColor = 'green';

// TODO: Try to change it to svg
const StyledWall = styled.div<{ size: number; side: string }>`
  background: ${outerHexagonColor};
  position: absolute;
  transition: background ${transition.average};
  z-index: ${zIndexes.wall};
  ${({ size, side }) =>
    side === positions.top || side === positions.bottom
      ? `
          margin: 0 ${size / 8}rem;
          ${side === positions.top ? `top: -${size / 8}rem;` : `bottom: -${size / 8}rem;`}
          width: ${size * (6 / 8)}rem;
          height: ${size / 4}rem;
        `
      : `
          margin: ${size / 8}rem 0;
          ${side === positions.left ? `left: -${size / 8}rem;` : `right: -${size / 8}rem;`}
          width: ${size / 4}rem;
          height: ${size * (6 / 8)}rem;
        `};

  &::before,
  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    ${({ size, side }) =>
      side === positions.top || side === positions.bottom
        ? `
            border-top: ${size / 8}rem  solid transparent;
            border-bottom: ${size / 8}rem  solid transparent;
          `
        : `
            border-left: ${size / 8}rem  solid transparent;
            border-right: ${size / 8}rem  solid transparent;
          `};
    transition: border ${transition.average};
  }
  &::before {
    ${({ size, side }) =>
      side === positions.top || side === positions.bottom
        ? `
            left: -${size / 8}rem;
            border-right: ${size / 8}rem  solid ${outerHexagonColor};
          `
        : `
            top: -${size / 8}rem;
            border-bottom: ${size / 8}rem  solid ${outerHexagonColor};
          `};
  }
  &::after {
    ${({ size, side }) =>
      side === positions.top || side === positions.bottom
        ? `
            right: -${size / 8}rem;
            border-left: ${size / 8}rem  solid ${outerHexagonColor};
          `
        : `
            bottom: -${size / 8}rem;
            border-top: ${size / 8}rem  solid ${outerHexagonColor};
          `};
  }
`;

const InnerHexagon = styled(StyledWall)`
  margin: 0;
  left: 0;
  top: 0;
  background: ${innerHexagonColor};
  transform: scale(0.9);
  z-index: ${zIndexes.innerHexagon};

  &::before {
    z-index: ${zIndexes.innerHexagon};
    ${({ size, side }) =>
      side === positions.top || side === positions.bottom
        ? `
            border-right-color: ${innerHexagonColor};
          `
        : `
            border-bottom-color: ${innerHexagonColor};
          `};
  }
  &::after {
    z-index: ${zIndexes.innerHexagon};
    ${({ size, side }) =>
      side === positions.top || side === positions.bottom
        ? `
            border-left-color: ${innerHexagonColor};
          `
        : `
            border-top-color: ${innerHexagonColor};
          `};
  }

  &:hover {
    background: ${colors.blue50};
    &::before {
      ${({ side }) =>
        side === positions.top || side === positions.bottom
          ? `border-right-color: ${colors.blue50}`
          : `border-bottom-color: ${colors.blue50};`}
    }
    &::after {
      ${({ side }) =>
        side === positions.top || side === positions.bottom
          ? `border-left-color: ${colors.blue50}`
          : `border-top-color: ${colors.blue50};`}
    }
  }
`;

export const Wall = ({ side, size = 5 }: { side: string; size?: number }) => {
  switch (side) {
    case 'top': {
      return (
        <StyledWall size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall>
      );
    }
    case 'bottom': {
      return (
        <StyledWall size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall>
      );
    }
    case 'left': {
      return (
        <StyledWall size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall>
      );
    }
    case 'right': {
      return (
        <StyledWall size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall>
      );
    }
    default:
      return null;
  }
};
