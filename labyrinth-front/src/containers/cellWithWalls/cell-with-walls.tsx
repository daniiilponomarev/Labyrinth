import React from 'react';
import styled from 'styled-components';

import { Cell } from 'containers';
import { Wall } from 'components';

const CellWWallsContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 10%;
  height: 100%;
  max-width: 5rem;
  max-height: 5rem;
  box-sizing: border-box;
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
