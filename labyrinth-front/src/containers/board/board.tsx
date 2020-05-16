import React from 'react';
import { map, slice } from 'ramda';
import styled from 'styled-components/macro';

import { CellWithWalls } from 'containers';
import { Wall } from 'components';
import { BOARD_HEIGHT, BOARD_WIDTH, generateWallId, ICell } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { getCellsArray } from 'selectors';

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

const getBoardRow: React.FC<{ cells: ICell[]; key: number }> = ({ cells, key }) => {
  return (
    <BoardRow key={key}>
      {/*<Wall*/}
      {/*  id={generateWallId(cells[cells.length - 1].id, 'right')}*/}
      {/*  side="right"*/}
      {/*  isActive={Math.random() >= 0.5}*/}
      {/*  isEnabled={Math.random() >= 0.5}*/}
      {/*/>*/}
      {map((cell: ICell): any => {
        return <CellWithWalls cell={cell} key={`cell-${cell.id}`} />;
      }, cells)}
    </BoardRow>
  );
};

const getBoardRows: (cells: ICell[]) => any[] = cells => {
  const boardRows = [];

  for (let i = 0; i < BOARD_HEIGHT; i++) {
    boardRows[i] = getBoardRow({ cells: slice(i * BOARD_WIDTH, i * BOARD_WIDTH + BOARD_WIDTH, cells), key: i });
  }

  return boardRows;
};

export const Board: React.FC<{ className?: string }> = ({ className }) => {
  const windowWidth = typeof window === 'object' ? window.innerWidth : undefined;

  // const dispatch = useDispatch();
  // dispatch(setSmthAction({ payload: 'payload' }));

  // const cells: ICell[][] = [];
  // let cellId = 0;
  //
  // const enumContentValuesWithWeight = new Array(50).fill(CellContentArray[0]).concat(CellContentArray);
  //
  // function randomEnum<T>(): { icon: T[keyof T]; text: T[keyof T] } {
  //   const randomIndex = Math.floor(Math.random() * enumContentValuesWithWeight.length);
  //   const randomContent = enumContentValuesWithWeight[randomIndex];
  //   return { icon: randomContent.icon, text: randomContent.text };
  // }
  //
  // for (let i = 0; i < 10; i++) {
  //   cells[i] = Array(10);
  //   for (let j = 0; j < 10; j++) {
  //     cells[i][j] = { id: cellId++ + '', contentIcon: randomEnum().icon, contentText: randomEnum().text };
  //   }
  // }

  const cells1 = useSelector(getCellsArray);

  console.log('render Board');

  return (
    <BoardContainer windowWidth={windowWidth || 0} className={className}>
      {/*{map((cellsRow: ICell[]): JSX.Element => {*/}
      {/*  return (*/}
      {/*    <BoardRow key={`row-${cellsRow[0].id}`}>*/}
      {/*      <Wall*/}
      {/*        id={generateWallId(cellsRow[cellsRow.length - 1].id, 'right')}*/}
      {/*        side="right"*/}
      {/*        isActive={Math.random() >= 0.5}*/}
      {/*        isEnabled={Math.random() >= 0.5}*/}
      {/*      />*/}
      {/*      {map((cell: ICell): any => {*/}
      {/*        return <CellWithWalls cell={cell} key={`cell-${cell.id}`} />;*/}
      {/*        // return (*/}
      {/*        //   <span key={`cell-${cell}`}>*/}
      {/*        //     <Wall side="left" />*/}
      {/*        //     <Wall side="top" />*/}
      {/*        //     <Cell id={`cell-${cell}`} />*/}
      {/*        //   </span>*/}
      {/*        // );*/}
      {/*      }, cellsRow)}*/}
      {/*    </BoardRow>*/}
      {/*  );*/}
      {/*}, cells)}*/}

      {getBoardRows(cells1)}
    </BoardContainer>
  );
};
