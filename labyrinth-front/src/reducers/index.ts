import { combineReducers } from 'redux';
import { IState } from 'types';
import { cells } from './cells-reducers';
import { walls } from './walls-reducers';

export const reducers = combineReducers<IState>({
  cells,
  walls
});
