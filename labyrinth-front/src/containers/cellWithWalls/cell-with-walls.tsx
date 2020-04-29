import React from 'react';
import styled from 'styled-components';

import { Cell } from 'containers';
import { Wall } from 'components';
import { generateWallId, ICell } from 'utils';

const CellWWallsContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 10%;
  height: 100%;
  max-width: 5rem;
  max-height: 5rem;
  box-sizing: border-box;
`;

export const CellWithWalls: React.FC<{ cell: ICell }> = ({ cell }) => {
  const { id } = cell;

  return (
    <CellWWallsContainer>
      <Wall
        id={generateWallId(id, 'left')}
        side="left"
        isActive={Math.random() >= 0.5}
        isEnabled={Math.random() >= 0.5}
      />
      <Wall
        id={generateWallId(id, 'top')}
        side="top"
        isActive={Math.random() >= 0.5}
        isEnabled={Math.random() >= 0.5}
      />
      <Cell cell={cell} />
      {+id >= 90 ? (
        <Wall
          id={generateWallId(id, 'bottom')}
          side="bottom"
          isActive={Math.random() >= 0.5}
          isEnabled={Math.random() >= 0.5}
        />
      ) : null}
    </CellWWallsContainer>
  );
};
