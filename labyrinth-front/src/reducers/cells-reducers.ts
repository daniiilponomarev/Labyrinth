import { AnyAction, Reducer } from 'redux';
import { indexBy, prop } from 'ramda';
import { ActionTypes, IState } from 'types';
import { ICell, BOARD_HEIGHT, BOARD_WIDTH, CellContentArray } from 'utils';

const enumContentValuesWithWeight = new Array(50).fill(CellContentArray[0]).concat(CellContentArray);

function randomEnum<T>(): { icon: T[keyof T]; text: T[keyof T] } {
  const randomIndex = Math.floor(Math.random() * enumContentValuesWithWeight.length);
  const randomContent = enumContentValuesWithWeight[randomIndex];
  return { icon: randomContent.icon, text: randomContent.text };
}

const initialCells: ICell[] = [];
let cellId = 0;
for (let i = 0; i < BOARD_WIDTH; i++) {
  for (let j = 0; j < BOARD_HEIGHT; j++) {
    initialCells[cellId++] = {
      id: `cell_${i}_${j}`,
      contentIcon: randomEnum().icon,
      contentText: randomEnum().text
    };
  }
}

const initialState = indexBy(prop('id'), initialCells);

export const cells: Reducer<Record<string, ICell> | null, AnyAction> = (store = initialState, action) => {
  if (action.type === ActionTypes.SetCell) {
    return action.payload;
  }

  return store;
};
