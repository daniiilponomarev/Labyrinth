import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, transition, zIndexes, positions } from 'utils';
import { isEmpty } from 'ramda';

const bgColor = 'yellow'; //colors.gray30;
const outerHexagonColor = 'transparent'; //colors.gray30;
const innerHexagonColor = colors.blue90;
const outerHexagonHoverColor = 'green';
const innerHexagonHoverColor = 'green';

// TODO: Try to change it to svg
const StyledWall1 = styled.div<{ size: number; side: string }>`
  background: ${outerHexagonColor};
  position: absolute;
  transition: background ${transition.average};
  z-index: ${zIndexes.wall};
  ${({ size, side }) => {
    let style = '';

    switch (side) {
      case positions.top:
      case positions.bottom: {
        style = `
          margin: 0 ${100 / 8}%;
          ${side === positions.top ? `top: -${100 / 8}%;` : `bottom: -${100 / 8}%;`}
          width: ${100 * (6 / 8)}%;
          height: ${100 / 4}%;
        `;
        break;
      }
      case positions.left: {
        style = `
          margin: ${100 / 8}% 0;
          left: -${100 / 8}%;
          width: ${100 / 4}%;
          height: ${100 * (6 / 8)}%;
        `;
        break;
      }
      case positions.right: {
        style = `
          margin: ${100 / 10 / 8}% 0;
          right: -${100 / 10 / 8}%;
          width: ${100 / 10 / 4}%;
          height: ${100 * (6 / 8)}%;
        `;
        break;
      }
    }
    return style;
  }};

  @media (min-width: 550px) {
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
  }
`;

const InnerHexagon = styled(StyledWall1)`
  width: 100%;
  height: 100%;
  margin: 0;
  left: 0;
  top: 0;
  background: ${innerHexagonColor};
  transform: scale(0.9);
  z-index: ${zIndexes.innerHexagon};

  @media (min-width: 550px) {
    margin: 0;
    left: 0;
    top: 0;
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

export const Wall2 = ({ side, size = 5 }: { side: string; size?: number }) => {
  switch (side) {
    case 'top': {
      return (
        <StyledWall1 size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall1>
      );
    }
    case 'bottom': {
      return (
        <StyledWall1 size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall1>
      );
    }
    case 'left': {
      return (
        <StyledWall1 size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall1>
      );
    }
    case 'right': {
      return (
        <StyledWall1 size={size} side={side}>
          <InnerHexagon size={size} side={side} />
        </StyledWall1>
      );
    }
    default:
      return null;
  }
};

// TODO: fix types
const VerticalWallSVG = ({
  className,
  size = 50,
  onClick
}: {
  className?: string;
  size?: number;
  onClick?: () => any;
}) => {
  const innerCoefficient = 1;
  const outerPath = `M ${size / 4 / 2} 0
         L ${size / 4} ${size * (1 / 8)}
         L ${size / 4} ${size * (7 / 8)}
         L ${size / 4 / 2} ${size}
         L 0 ${size * (7 / 8)}
         L 0 ${size * (1 / 8)}
         L ${size / 4 / 2} 0
         Z`;
  const innerPath = `M ${size / 4 / 2} ${innerCoefficient}
         L ${size / 4 - innerCoefficient} ${size * (1 / 8)}
         L ${size / 4 - innerCoefficient} ${size * (7 / 8)}
         L ${size / 4 / 2} ${size - innerCoefficient}
         L ${innerCoefficient} ${size * (7 / 8)}
         L ${innerCoefficient} ${size * (1 / 8)}
         L ${size / 4 / 2} ${innerCoefficient}
         Z`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size / 4} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
    >
      {/*<path fill="transparent" d={outerPath} />*/}
      <path d={outerPath} />
      <path className="inner-path" d={innerPath} />
    </svg>
  );
};

const HorizontalWallSVG = ({
  className,
  size = 50,
  onClick
}: {
  className?: string;
  size?: number;
  onClick?: () => any;
}) => {
  const outerPath = `M 0 ${size / 4 / 2}
         L ${size * (1 / 8)} 0
         L ${size * (7 / 8)} 0
         L ${size} ${size * (1 / 8)}
         L ${size * (7 / 8)} ${size / 4}
         L ${size * (1 / 8)} ${size / 4}
         L 0 ${size / 4 / 2}
         Z`;
  const innerCoefficient = 1;
  const innerPath = `M ${innerCoefficient} ${size / 4 / 2}
         L ${size * (1 / 8)} ${innerCoefficient}
         L ${size * (7 / 8)} ${innerCoefficient}
         L ${size - innerCoefficient} ${size * (1 / 8)}
         L ${size * (7 / 8)} ${size / 4 - innerCoefficient}
         L ${size * (1 / 8)} ${size / 4 - innerCoefficient}
         L ${innerCoefficient} ${size / 4 / 2}
         Z`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size} ${size / 4}`}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
    >
      <path d={outerPath} />
      <path className="inner-path" d={innerPath} />
    </svg>
  );
};

const StyledVerticalWall = styled(VerticalWallSVG)<{ size: number; side: string; randomColor?: any }>`
  position: absolute;
  fill: ${outerHexagonColor};
  transition: background ${transition.average};
  z-index: ${zIndexes.wall};
  height: ${100}%;
  fill: ${outerHexagonColor};
  ${({ size, side }) =>
    side === positions.left
      ? `left: -${100 / 8}%;
         width: ${100 / 4}%;`
      : `right: -${100 / 10 / 8}%;
         width: ${100 / 10 / 4}%;`};
  & .inner-path {
    fill: ${innerHexagonColor};
  }
`;

const StyledHorizontalWall = styled(HorizontalWallSVG)<{ size: number; side: string; randomColor?: any }>`
  position: absolute;
  fill: ${outerHexagonColor};
  transition: background ${transition.average};
  z-index: ${zIndexes.wall};
  fill: ${outerHexagonColor};
  ${({ size, side }) =>
    side === positions.top
      ? `top: -${100 / 4 / 2}%;
         width: ${100}%;
         height: ${100 / 4}%;`
      : `left: 0;
         bottom: -${100 / 4 / 2}%;
         width: ${100}%;
         height: ${100 / 4}%;`};
  & .inner-path {
    fill: ${innerHexagonColor};
  }
`;

export const Wall = ({ side, size = 50, randomColor }: { side: string; size?: number; randomColor?: any }) => {
  // if (!isEmpty(Object.values(positions).filter(correctSide => new RegExp(side, 'ig').test(correctSide)))) {
  //   return <StyledWall size={size} side={side} randomColor={randomColor} />;
  // }

  if (side === positions.left || side === positions.right) {
    return <StyledVerticalWall size={size} side={side} randomColor={randomColor} />;
  } else if (side === positions.top || side === positions.bottom) {
    return <StyledHorizontalWall size={size} side={side} randomColor={randomColor} />;
  }

  return null;
};
