import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { colors, transition, zIndexes } from 'utils';
import { LogoSVG, InnerPath, OuterPath, Aside } from 'components';

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
    transition: transform ${transition.average} ease-out;
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
  z-index: ${zIndexes.header};

  &:hover {
    & ${HeaderTitle}::before, & ${HeaderTitle}::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    & ${OuterPath} {
      fill: ${colors.blue10};
      stroke: ${colors.blue70};
    }
    & ${InnerPath} {
      stroke: ${colors.gray90};
    }
  }
`;

const HeaderMenuButton = styled(IconButton)`
  flex: 0 0 3rem;
  height: 3rem;
  width: 3rem;
  margin-left: 1rem;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  margin-right: 4rem;
`;

export const Header: React.FC<any> = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleMenu: (isMenuOpened: boolean) => (event: any) => void = isMenuOpened => event => {
    setIsMenuOpened(isMenuOpened);
  };

  return (
    <HeaderContainer onClick={toggleMenu(!isMenuOpened)}>
      <HeaderMenuButton aria-label="menu">
        <MenuIcon />
      </HeaderMenuButton>
      <Aside isMenuOpened={isMenuOpened} />

      <HeaderTitleContainer>
        <StyledLogoSVG size={'3rem'} />
        <HeaderTitle>Labyrinth</HeaderTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
