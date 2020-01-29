import React, { useEffect } from 'react';
import styled from 'styled-components';
import { List, SwipeableDrawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

import { colors } from 'utils';

const SideListWrapper = styled.div`
  display: grid;
  grid-template: 4rem 1fr 3rem / 100%;
  height: 100%;
`;

const HeaderPart = styled.div`
  height: 4rem;
  background-color: ${colors.gray0};
  box-shadow: 0 2px 2px 3px ${colors.gray20};
`;

const StyledSideList = styled.div`
  width: 25rem;
`;

const FooterPart = styled.div`
  height: 3rem;
  background-color: ${colors.gray0};
  box-shadow: 0 -2px 2px 3px ${colors.gray20};
`;

export const Aside: React.FC<any> = (props: { isMenuOpened: boolean }) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  useEffect(
    () => {
      setIsMenuOpened(props.isMenuOpened);

      return function cleanup() {
        setIsMenuOpened(false);
      };
    },
    [props.isMenuOpened]
  );

  const toggleDrawer: (isMenuOpened: boolean) => (event: any) => void = isMenuOpened => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsMenuOpened(isMenuOpened);
  };

  return (
    <SwipeableDrawer open={isMenuOpened} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
      <SideListWrapper>
        <HeaderPart />
        <StyledSideList role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {['New Game', 'Feedback', 'About'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </StyledSideList>{' '}
        <FooterPart />
      </SideListWrapper>
    </SwipeableDrawer>
  );
};
