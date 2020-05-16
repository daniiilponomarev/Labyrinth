export enum WallSidesEnum {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom'
}

export interface IWall {
  id: string;
  side: WallSidesEnum;
  isActive: boolean;
  isEnabled: boolean;
}
