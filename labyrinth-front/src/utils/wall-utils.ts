import {
  // outerHexagonColor,
  // outerHexagonDisabledColor,
  innerHexagonActiveEnabledColor,
  innerHexagonInactiveEnabledColor,
  innerHexagonActiveDisabledColor,
  innerHexagonInactiveDisabledColor
  // innerHexagonHoverColor
} from './css-constants';
import { IWall, WallSidesEnum } from '../types/walls';
import { BOARD_HEIGHT, BOARD_WIDTH } from './board-utils';

export const defineInnerFillColor = (isActive?: boolean, isEnabled?: boolean) => {
  if (isActive && isEnabled) {
    return innerHexagonActiveEnabledColor;
  }

  if (isActive && !isEnabled) {
    return innerHexagonActiveDisabledColor;
  }

  if (!isActive && isEnabled) {
    return innerHexagonInactiveEnabledColor;
  } else {
    return innerHexagonInactiveDisabledColor;
  }
};

export const generateWallId = (id: string, side: string) => {
  return `wall-${id}-${side}`;
};

export const generateInternalWallId = (side: string, column: number, row: number) => {
  return `internalWall_${side}_${column}_${row}`;
};

export const generateExternalWallId = (side: string, columnOrRow: number) => {
  return `externalWall_${side}_${columnOrRow}`;
};

export const generateInitialInternalWallsArray = (): IWall[] => {
  const initialInternalWallsArray: IWall[] = [];
  let internalWallId = 0;

  for (let i = 0; i < BOARD_HEIGHT; i++) {
    for (let j = 0; j < BOARD_WIDTH; j++) {
      // Right walls are not necessary for the last cells
      if (j < BOARD_WIDTH - 1) {
        initialInternalWallsArray[internalWallId++] = {
          // id: `internalWall_${WallSidesEnum.right}_${i}_${j}`,
          id: generateInternalWallId(WallSidesEnum.right, j, i),
          side: WallSidesEnum.right,
          // isActive: Math.random() >= 0.5,
          // isEnabled: Math.random() >= 0.5
          isActive: true,
          isEnabled: true
        };
      }

      // Bottom walls are not necessary for the last cells
      if (i < BOARD_HEIGHT - 1) {
        initialInternalWallsArray[internalWallId++] = {
          // id: `internalWall_${WallSidesEnum.bottom}_${i}_${j}`,
          id: generateInternalWallId(WallSidesEnum.bottom, j, i),
          side: WallSidesEnum.bottom,
          // isActive: Math.random() >= 0.5,
          // isEnabled: Math.random() >= 0.5
          isActive: true,
          isEnabled: true
        };
      }
    }
  }

  return initialInternalWallsArray;
};

export const generateInitialExternalWallsArray = (): IWall[] => {
  const initialExternalWallsArray: IWall[] = [];
  let externalWallId = 0;

  for (let i = 0; i < BOARD_WIDTH; i++) {
    initialExternalWallsArray[externalWallId++] = {
      // id: `externalWall_${WallSidesEnum.top}_${i}`,
      id: generateExternalWallId(WallSidesEnum.top, i),
      side: WallSidesEnum.top,
      isActive: true,
      isEnabled: true
    };
    initialExternalWallsArray[externalWallId++] = {
      // id: `externalWall_${WallSidesEnum.bottom}_${i}`,
      id: generateExternalWallId(WallSidesEnum.bottom, i),
      side: WallSidesEnum.bottom,
      isActive: true,
      isEnabled: true
    };
  }

  for (let j = 0; j < BOARD_HEIGHT; j++) {
    initialExternalWallsArray[externalWallId++] = {
      // id: `externalWall_${WallSidesEnum.left}_${j}`,
      id: generateExternalWallId(WallSidesEnum.left, j),
      side: WallSidesEnum.left,
      isActive: true,
      isEnabled: true
    };
    initialExternalWallsArray[externalWallId++] = {
      // id: `externalWall_${WallSidesEnum.right}_${j}`,
      id: generateExternalWallId(WallSidesEnum.right, j),
      side: WallSidesEnum.right,
      isActive: true,
      isEnabled: true
    };
  }

  return initialExternalWallsArray;
};
