import { Action } from 'redux';
// import { TypeSmth } from '?';

export const ActionTypes = {
  SetSmth: 'SetSmth'
};

export type SetSmthActionType = Action<typeof ActionTypes.SetSmth> & {
  payload: any;
};

export const setSmthAction = (smth: any): SetSmthActionType => ({
  type: ActionTypes.SetSmth,
  payload: smth
});
