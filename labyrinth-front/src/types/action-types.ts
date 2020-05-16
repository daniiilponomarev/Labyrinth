import { Action } from 'redux';

export const ActionTypes = {
  SetCell: 'SetCell'
};

export type SetCellActionType = Action<typeof ActionTypes.SetCell> & {
  payload: any;
};
