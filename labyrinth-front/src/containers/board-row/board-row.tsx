import React, { useMemo } from 'react';
import styled from 'styled-components/macro';

import { Cell } from 'containers';
import { Wall } from 'components';
import { ICell, generateWallId, BOARD_WIDTH } from 'utils';
import { map } from 'ramda';
import { IWall } from '../../types/walls';
import { getCellsArray, getWallsByColumnRowArray } from '../../selectors';
import { useSelector } from 'react-redux';
import { IState } from '../../types';

const StyledBoardRow = styled.div`
  position: relative;
  height: 10%;
`;

const CellWWallsContainer = styled.span`
  position: relative;
  display: inline-block;
  width: ${100 / BOARD_WIDTH}%;
  height: 100%;
  max-width: 5rem;
  max-height: 5rem;
  box-sizing: border-box;
`;

const CellWithWalls: React.FC<{ cell: ICell; columnNumber: number; rowNumber: number }> = ({
  cell,
  columnNumber,
  rowNumber
}) => {
  const position = { columnNumber, rowNumber };
  const getWalls = useMemo(getWallsByColumnRowArray, []);
  const walls: IWall[] = useSelector((state: IState) => getWalls(state, position));
  // const walls: IWall[] = useSelector(getWallsByColumnRowArray);

  console.log(rowNumber, columnNumber, walls);

  return (
    <CellWWallsContainer>
      {/*<Wall id={generateWallId(rowNumber + '', 'left')} side="left" isActive={true} isEnabled={true} />*/}
      {/*<Wall id={generateWallId(rowNumber + '', 'top')} side="top" isActive={true} isEnabled={true} />*/}
      {/*{rowNumber >= 9 ? (*/}
      {/*  <Wall id={generateWallId(rowNumber + '', 'bottom')} side="bottom" isActive={true} isEnabled={true} />*/}
      {/*) : null}*/}
      {map(
        (wall: IWall) =>
          wall && <Wall id={wall.id} side={wall.side} isActive={wall.isActive} isEnabled={wall.isEnabled} />,
        walls
      )}
      <Cell cell={cell} />
    </CellWWallsContainer>
  );
};

export const BoardRow: React.FC<{ cells: ICell[]; rowNumber: number }> = ({ cells, rowNumber }) => {
  const externalWalls: IWall[] = [];
  let columnNumber = 0;

  console.log(rowNumber, cells, externalWalls);
  return (
    <StyledBoardRow key={rowNumber}>
      {/*<Wall id={generateWallId(cells[cells.length - 1].id, 'right')} side="right" isActive={true} isEnabled={true} />*/}
      {map((cell: ICell): any => {
        // console.log(cell, rowNumber);
        // return getCellWithWalls({ cell, columnNumber: columnNumber++, rowNumber });
        return <CellWithWalls cell={cell} columnNumber={columnNumber++} rowNumber={rowNumber} />;

        // return (
        //   <CellWWallsContainer>
        //     <Wall id={generateWallId(rowNumber + '', 'left')} side="left" isActive={true} isEnabled={true} />
        //     {/*<Wall id={generateWallId(rowNumber + '', 'top')} side="top" isActive={true} isEnabled={true} />*/}
        //     {rowNumber >= 9 ? (
        //       <Wall id={generateWallId(rowNumber + '', 'bottom')} side="bottom" isActive={true} isEnabled={true} />
        //     ) : null}
        //     <Cell cell={cell} />
        //   </CellWWallsContainer>
        // );
      }, cells)}
    </StyledBoardRow>
  );
};
