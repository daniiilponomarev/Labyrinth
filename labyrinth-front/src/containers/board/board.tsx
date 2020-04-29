import React from 'react';
import styled from 'styled-components/macro';
import { map } from 'ramda';

import { CellWithWalls } from 'containers';
import { Wall } from 'components';
import { CellContent, generateWallId, ICell } from 'utils';

const BoardContainer = styled.div<{ windowWidth: number }>`
  display: flex;
  flex-flow: column nowrap;
  // width: ${props => `${props.windowWidth}px`};
  width: 95%;
  height: ${props => `${props.windowWidth - 20}px`};
  max-width: 50rem;
  max-height: 50rem;
  border-radius: 5px;
`;

const BoardRow = styled.div`
  position: relative;
  height: 10%;
`;

export const Board: React.FC<any> = ({ className }) => {
  // const size = useWindowSize();
  // const windowWidth1 = size.width;
  const windowWidth = typeof window === 'object' ? window.innerWidth : undefined;

  const cells: ICell[][] = [];
  let cellId = 0;

  for (let i = 0; i < 10; i++) {
    cells[i] = Array(10);
    for (let j = 0; j < 10; j++) {
      cells[i][j] = { id: cellId++ + '', content: CellContent.HermesBoots };
    }
  }

  return (
    <BoardContainer windowWidth={windowWidth || 0} className={className}>
      {map((cellsRow: ICell[]): JSX.Element => {
        return (
          <BoardRow key={`row-${cellsRow[0].id}`}>
            <Wall
              id={generateWallId(cellsRow[cellsRow.length - 1].id, 'right')}
              side="right"
              isActive={Math.random() >= 0.5}
              isEnabled={Math.random() >= 0.5}
            />
            {map((cell: ICell): any => {
              return <CellWithWalls cell={cell} key={`cell-${cell.id}`} />;
              // return (
              //   <span key={`cell-${cell}`}>
              //     <Wall side="left" />
              //     <Wall side="top" />
              //     <Cell id={`cell-${cell}`} />
              //   </span>
              // );
            }, cellsRow)}
          </BoardRow>
        );
      }, cells)}
    </BoardContainer>
  );
};
