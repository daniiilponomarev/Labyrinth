import React from 'react';
import styled from 'styled-components';

import { colors } from 'utils';
import { LogoSVG, InnerPath, OuterPath } from 'components';

const StyledLogoSVG = styled(LogoSVG)`
  margin-right: 1rem;
`;

const HeaderTitle = styled.span`
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    left: 0;
    background-color: ${colors.blue90};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: -3px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 4rem;
  background-color: ${colors.gray0};
  box-shadow: 0 2px 2px 3px ${colors.gray20};
  width: 100%;
  font-weight: bold;

  &:hover {
    & ${HeaderTitle}::before, & ${HeaderTitle}::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    & ${InnerPath} {
      stroke: ${colors.gray90};
    }
    & ${OuterPath} {
      stroke: ${colors.blue70};
    }
  }
`;

export const Header: React.FC<any> = () => {
  return (
    <HeaderContainer>
      <StyledLogoSVG size={32} />
      <HeaderTitle>Labyrinth</HeaderTitle>
    </HeaderContainer>
  );
};
