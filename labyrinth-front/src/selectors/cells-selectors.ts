import { values } from 'ramda';
import { IState } from 'types';
import { createSelector } from 'reselect';

export const getCells = ({ cells }: IState) => cells;

export const getCellsArray = createSelector(getCells, cells => cells && values(cells));
