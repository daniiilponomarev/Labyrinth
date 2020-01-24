import React, { useState, useEffect } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { map, addIndex } from 'ramda';

import { colors, useWindowSize } from 'utils';
import { Cell, CellWithWalls } from 'containers';
import { Wall } from '../../components/wall';
// import { CellWithWalls } from '../cellWithWalls';

const BoardContainer: StyledComponent<any, any> = styled.div`
  display: flex;
  flex-flow: column nowrap;
  // width: ${(props: { windowWidth: number }) => `${props.windowWidth}px`};
  width: 95%;
  height: ${(props: { windowWidth: number }) => `${props.windowWidth - 20}px`};
  max-width: 50rem;
  // min-width: 50rem;
  max-height: 50rem;
  // min-height: 50rem;
  border-radius: 5px;
  border: 1px solid ${colors.gray50};
  // overflow: hidden;
`;

const BoardRow = styled.div`
  position: relative;
  height: 10%;
`;

export const Board: React.FC<any> = ({ className }) => {
  // const size = useWindowSize();
  // const windowWidth1 = size.width;
  const windowWidth = typeof window === 'object' ? window.innerWidth : undefined;

  const cells: number[][] = [];
  let cellId = 0;

  for (let i = 0; i < 10; i++) {
    cells[i] = Array(10);
    for (let j = 0; j < 10; j++) {
      cells[i][j] = cellId++;
    }
  }
  console.log(
    addIndex(map)((cellsRow: unknown, i): any => {
      console.log(i);
      return cellsRow;
    }, cells)
  );

  return (
    <BoardContainer windowWidth={windowWidth} className={className}>
      {addIndex(map)((cellsRow: any, rowIndex: number): any => {
        return (
          // maybe another key should be used
          // TODO: check performance
          <BoardRow key={`row-${cellsRow[0]}`}>
            <Wall side="right" />
            {map((cell: number): any => {
              return <CellWithWalls id={cell} key={`cell-${cell}`} />;
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
