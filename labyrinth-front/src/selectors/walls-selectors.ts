import { values } from 'ramda';
import { IState } from 'types';
import { createSelector } from 'reselect';

export const getWalls = ({ walls }: IState) => walls;

export const getWallsArray = createSelector(getWalls, walls => walls && values(walls));
