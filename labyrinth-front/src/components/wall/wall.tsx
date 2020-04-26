import React from 'react';
import styled from 'styled-components';
import { colors, transition, zIndexes, positions } from 'utils';

const outerHexagonColor = 'transparent';
const innerHexagonColor = colors.blue90;
const innerHexagonHoverColor = colors.blue50;

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
  z-index: ${zIndexes.wall};
  height: ${100}%;
  ${({ size, side }) =>
    side === positions.left
      ? `left: -${100 / 8}%;
         width: ${100 / 4}%;`
      : `right: -${100 / 10 / 8}%;
         width: ${100 / 10 / 4}%;`};
  & .inner-path {
    fill: ${props => (props.randomColor ? props.randomColor : innerHexagonColor)};
    transition: fill ${transition.average};
  }
  
  &:hover {
    & .inner-path {
      fill: ${innerHexagonHoverColor};
    }
  }
`;

const StyledHorizontalWall = styled(HorizontalWallSVG)<{ size: number; side: string; randomColor?: any }>`
  position: absolute;
  fill: ${outerHexagonColor};
  z-index: ${zIndexes.wall};
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
    transition: fill ${transition.average};
  }

  &:hover {
    & .inner-path {
      fill: ${innerHexagonHoverColor};
    }
  }
`;

export const Wall = ({ side, size = 50 }: { side: string; size?: number }) => {
  if (side === positions.left || side === positions.right) {
    return <StyledVerticalWall size={size} side={side} />;
  } else if (side === positions.top || side === positions.bottom) {
    return <StyledHorizontalWall size={size} side={side} />;
  }

  return null;
};
