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
      <Wall side="left" isActive={Math.random() >= 0.5} isEnabled={Math.random() >= 0.5} />
      <Wall side="top" isActive={Math.random() >= 0.5} isEnabled={Math.random() >= 0.5} />
      <Cell id={`cell-${id}`} />
      {id >= 90 ? <Wall side="bottom" isActive={Math.random() >= 0.5} isEnabled={Math.random() >= 0.5} /> : null}
    </CellWWallsContainer>
  );
};
