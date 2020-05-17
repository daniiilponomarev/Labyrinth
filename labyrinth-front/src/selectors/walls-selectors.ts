import { values } from 'ramda';
import { IState } from 'types';
import { createSelector } from 'reselect';
import { IWall, WallSidesEnum } from '../types/walls';
import { BOARD_HEIGHT, BOARD_WIDTH, generateExternalWallId, generateInternalWallId } from '../utils';

export const getWalls = ({ walls }: IState) => walls;

export const getWallsArray = createSelector(getWalls, walls => walls && values(walls));

export const getWallsByRowColumnArray1 = createSelector(
  getWalls,
  (state: any, position: any) => position,
  (entities, position) => []
);

export const getWallsByColumnRowArray = () =>
  createSelector(
    getWalls,
    (state: IState, position: { columnNumber: number; rowNumber: number }) => position,
    (stateWalls, position) => {
      // console.log(stateWalls, position);

      const { columnNumber, rowNumber } = position;
      const walls: IWall[] = [];

      if (rowNumber === 0) {
        walls.push(stateWalls.externalWalls[generateExternalWallId(WallSidesEnum.top, columnNumber)]);
      }

      if (rowNumber === BOARD_HEIGHT - 1) {
        walls.push(stateWalls.externalWalls[generateExternalWallId(WallSidesEnum.bottom, columnNumber)]);
      }

      if (columnNumber === 0) {
        walls.push(stateWalls.externalWalls[generateExternalWallId(WallSidesEnum.left, rowNumber)]);
      }

      if (columnNumber === BOARD_WIDTH - 1) {
        walls.push(stateWalls.externalWalls[generateExternalWallId(WallSidesEnum.right, rowNumber)]);
      }

      if (columnNumber < BOARD_WIDTH - 1) {
        walls.push(stateWalls.internalWalls[generateInternalWallId(WallSidesEnum.right, columnNumber, rowNumber)]);
      }

      if (rowNumber < BOARD_HEIGHT - 1) {
        walls.push(stateWalls.internalWalls[generateInternalWallId(WallSidesEnum.bottom, columnNumber, rowNumber)]);
      }

      return walls;
    }
  );
