import React from 'react';
import styled from 'styled-components';

import { colors } from 'utils';
import { Wall } from '../../components/wall';
import { Cell } from '../cell';

// TODO: change to % instead of rems or pxs, remember about the walls
const CellWWallsContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 10%;
  height: 100%;
  max-width: 5rem;
  max-height: 5rem;
  box-sizing: border-box;
  
  // background: linear-gradient(${colors.gray30}, ${colors.gray20});
  // border-radius: 5px;
  // border: 1px solid ${colors.gray50};
`;

export const CellWithWalls: React.FC<{ id: number }> = ({ id }) => {
  return (
    <CellWWallsContainer>
      <Wall side="left" />
      <Wall side="top" />
      <Cell id={`cell-${id}`} />
      {id >= 90 ? <Wall side="bottom" /> : null}
    </CellWWallsContainer>
  );
};
