import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IconButton, List, SwipeableDrawer, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

import { LogoSVG, InnerPath, OuterPath } from 'components';

const StyledLogoSVG = styled(LogoSVG)`
  margin-right: 1rem;
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

  const SideList = () => (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
    </div>
  );

  return (
    <SwipeableDrawer open={isMenuOpened} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
      <SideList />
    </SwipeableDrawer>
  );
};
