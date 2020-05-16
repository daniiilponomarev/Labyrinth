import { AnyAction, combineReducers, Reducer } from 'redux';
import { indexBy, prop } from 'ramda';
import { ActionTypes, IState } from 'types';
import { generateInitialExternalWallsArray, generateInitialInternalWallsArray } from 'utils';
import { IWall } from '../types/walls';

const initialInternalWalls = indexBy(prop('id'), generateInitialInternalWallsArray());
const initialExternalWalls = indexBy(prop('id'), generateInitialExternalWallsArray());

export const internalWalls: Reducer<Record<string, IWall> | null, AnyAction> = (store = initialInternalWalls, action) => {
  if (action.type === ActionTypes.SetCell) {
    return action.payload;
  }

  return store;
};

export const externalWalls: Reducer<Record<string, IWall> | null, AnyAction> = (
  store = initialExternalWalls,
  action
) => {
  if (action.type === ActionTypes.SetCell) {
    return action.payload;
  }

  return store;
};

export const walls = combineReducers<{
  internalWalls: Record<string, IWall> | null;
  externalWalls: Record<string, IWall> | null;
}>({
  internalWalls,
  externalWalls
});
