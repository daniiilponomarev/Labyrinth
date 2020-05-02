import React, { useState } from 'react';
import styled from 'styled-components';
import {
  transition,
  zIndexes,
  positions,
  outerHexagonColor,
  innerHexagonHoverColor,
  defineInnerFillColor
} from 'utils';

interface IWall {
  id: string;
  className?: string;
  side: string;
  size?: number;
  isActive?: boolean;
  isEnabled?: boolean;
  isEnabledWall?: boolean;
  randomColor?: string;
  onClick?: () => void;
}

interface ISVGWall {
  className?: string;
  wallProps: {
    side: string;
    size?: number;
    isActive?: boolean;
    isEnabledWall?: boolean;
    onClick?: () => void;
  };
}

const VerticalWallSVG: React.FC<ISVGWall> = ({ className, wallProps }) => {
  const { size = 50, onClick, isActive, isEnabledWall } = wallProps;

  const innerCoefficient = 1;
  const outerPath = `M ${size / 4 / 2} 0 L ${size / 4} ${size * (1 / 8)}
         L ${size / 4} ${size * (7 / 8)} L ${size / 4 / 2} ${size}
         L 0 ${size * (7 / 8)} L 0 ${size * (1 / 8)}
         L ${size / 4 / 2} 0 Z`;
  const innerPath = `M ${size / 4 / 2} ${innerCoefficient} L ${size / 4 - innerCoefficient} ${size * (1 / 8)}
         L ${size / 4 - innerCoefficient} ${size * (7 / 8)} L ${size / 4 / 2} ${size - innerCoefficient}
         L ${innerCoefficient} ${size * (7 / 8)} L ${innerCoefficient} ${size * (1 / 8)}
         L ${size / 4 / 2} ${innerCoefficient} Z`;

  const innerFillColor = defineInnerFillColor(isActive, isEnabledWall);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size / 4} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      onClick={onClick}
    >
      <path className="outer-path" d={outerPath} />
      <path className="inner-path" d={innerPath} fill={innerFillColor} />
    </svg>
  );
};

const StyledVerticalWall = styled(VerticalWallSVG)<ISVGWall>`
  position: absolute;
  fill: ${outerHexagonColor};
  z-index: ${zIndexes.wall};
  height: ${100}%;
  ${({ wallProps }) =>
    wallProps.side === positions.left
      ? `left: -${100 / 8}%;
         width: ${100 / 4}%;`
      : `right: -${100 / 10 / 8}%;
         width: ${100 / 10 / 4}%;`};

  & .inner-path {
    transition: fill ${transition.average};
  }

  &:hover {
    & .inner-path {
      fill: ${innerHexagonHoverColor};
    }
  }
`;

const HorizontalWallSVG: React.FC<ISVGWall> = ({ className, wallProps }) => {
  const { size = 50, onClick, isActive, isEnabledWall } = wallProps;

  const outerPath = `M 0 ${size / 4 / 2} L ${size * (1 / 8)} 0
         L ${size * (7 / 8)} 0 L ${size} ${size * (1 / 8)}
         L ${size * (7 / 8)} ${size / 4} L ${size * (1 / 8)} ${size / 4}
         L 0 ${size / 4 / 2} Z`;
  const innerCoefficient = 1;
  const innerPath = `M ${innerCoefficient} ${size / 4 / 2} L ${size * (1 / 8)} ${innerCoefficient}
         L ${size * (7 / 8)} ${innerCoefficient} L ${size - innerCoefficient} ${size * (1 / 8)}
         L ${size * (7 / 8)} ${size / 4 - innerCoefficient} L ${size * (1 / 8)} ${size / 4 - innerCoefficient}
         L ${innerCoefficient} ${size / 4 / 2} Z`;

  const innerFillColor = defineInnerFillColor(isActive, isEnabledWall);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size} ${size / 4}`}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      onClick={onClick}
    >
      <path className="outer-path" d={outerPath} />
      <path className="inner-path" d={innerPath} fill={innerFillColor} />
    </svg>
  );
};

const StyledHorizontalWall = styled(HorizontalWallSVG)<ISVGWall>`
  position: absolute;
  fill: ${outerHexagonColor};
  z-index: ${zIndexes.wall};
  ${({ wallProps }) =>
    wallProps.side === positions.top
      ? `top: -${100 / 4 / 2}%;
         width: ${100}%;
         height: ${100 / 4}%;`
      : `left: 0;
         bottom: -${100 / 4 / 2}%;
         width: ${100}%;
         height: ${100 / 4}%;`};

  & .inner-path {
    transition: fill ${transition.average};
  }

  &:hover {
    & .inner-path {
      fill: ${innerHexagonHoverColor};
    }
  }
`;

export const Wall: React.FC<IWall> = ({ id, side, size = 50, isActive = true, isEnabled = true }) => {
  const [isEnabledWall, setIsEnabledWall] = useState(isEnabled);
  const onClick = () => {
    setIsEnabledWall(!isEnabledWall);
  };
  const wallProps = { side, size, isActive, isEnabledWall, onClick };

  return (
    <>
      {side === positions.left || side === positions.right ? (
        <StyledVerticalWall wallProps={wallProps} />
      ) : (
        <StyledHorizontalWall wallProps={wallProps} />
      )}
    </>
  );
};
