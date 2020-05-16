import React from 'react';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ICell, CellContentIconEnum, CellMenuArray, colors, getContentIcon, transition } from 'utils';

const CellContainer = styled(Button)`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0;
  background: ${colors.blue0};
  border-radius: 25%;
  border: 1px solid ${colors.blue90};
  text-align: center;
  transition: background ${transition.average};

  &:hover {
    background: ${colors.blue10};
  }
`;

const ContentContainer = styled.img`
  width: 50%;
  height: 100%;
`;

const StyledMenuItem = styled(MenuItem)`
  color: ${colors.blue90};
  &:focus {
    background: ${colors.blue10};
  }
`;

const StyledMenuIcon = styled.img`
  width: 3rem;
`;

export const Cell: React.FC<{ cell: ICell }> = ({ cell }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('handleClick cell');
    // cell.handleClick(event);
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    console.log('handleClose');
    setAnchorEl(null);
  };

  const handleChoice = (event: React.MouseEvent<HTMLElement>) => {
    console.log('handleChoice', event.currentTarget.id);
    setAnchorEl(null);
  };

  // console.log('render Cell', globalState.myBoard);

  return (
    <>
      <CellContainer aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
        {cell.contentIcon !== CellContentIconEnum.Empty && (
          <ContentContainer src={getContentIcon(cell.contentIcon)} alt="Cell Content" />
        )}
      </CellContainer>

      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        anchorEl={anchorEl}
        keepMounted={false}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {CellMenuArray.map(cellContent => (
          <StyledMenuItem key={cellContent.id} id={cellContent.id} onClick={handleChoice}>
            <ListItemIcon>
              {cellContent.icon ? <StyledMenuIcon src={getContentIcon(cellContent.icon)} alt="Cell Content" /> : <></>}
            </ListItemIcon>
            <ListItemText primary={cellContent.text} />
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};
