import Treasure from 'assets/icons/treasure.svg';
import FalseTreasure from 'assets/icons/falseTreasure.svg';
import ClosedTreasure from 'assets/icons/closedTreasure.svg';
import Crossbow from 'assets/icons/crossbow.svg';
import HermesBoots from 'assets/icons/hermesBoots.svg';
import Trap from 'assets/icons/trap.svg';

export interface ICell {
  id: string;
  content: CellContentEnum;
}

export enum CellContentEnum {
  Empty = 'EMPTY',
  Crossbow = 'CROSSBOW',
  HermesBoots = 'HERMES_BOOTS',
  Trap = 'TRAP',
  // PitEntry1 = 'PIT_ENTRY_1',
  // PitEntry2 = 'PIT_ENTRY_2',
  // PitEntry3 = 'PIT_ENTRY_3',
  // PitEntry4 = 'PIT_ENTRY_4',
  // PitExit1 = 'PIT_EXIT_1',
  // PitExit2 = 'PIT_EXIT_2',
  // PitExit3 = 'PIT_EXIT_3',
  // PitExit4 = 'PIT_EXIT_4',
  Treasure = 'TREASURE',
  FalseTreasure1 = 'FALSE_TREASURE_1',
  FalseTreasure2 = 'FALSE_TREASURE_2',
  FalseTreasure3 = 'FALSE_TREASURE_3',
  ClosedTreasure1 = 'CLOSED_TREASURE_1',
  ClosedTreasure2 = 'CLOSED_TREASURE_2',
  ClosedTreasure3 = 'CLOSED_TREASURE_3',
  ClosedTreasure4 = 'CLOSED_TREASURE_4'
}

export const getContentIcon = (content: string) => {
  switch (content) {
    case CellContentEnum.Treasure:
      return Treasure;
    case CellContentEnum.FalseTreasure1:
    case CellContentEnum.FalseTreasure2:
    case CellContentEnum.FalseTreasure3:
      return FalseTreasure;
    case CellContentEnum.ClosedTreasure1:
    case CellContentEnum.ClosedTreasure2:
    case CellContentEnum.ClosedTreasure3:
    case CellContentEnum.ClosedTreasure4:
      return ClosedTreasure;
    case CellContentEnum.Crossbow:
      return Crossbow;
    case CellContentEnum.HermesBoots:
      return HermesBoots;
    case CellContentEnum.Trap:
      return Trap;
  }
};
