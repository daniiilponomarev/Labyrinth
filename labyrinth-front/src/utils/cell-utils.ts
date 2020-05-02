import Treasure from 'assets/icons/treasure.svg';
import FalseTreasure from 'assets/icons/falseTreasure.svg';
import ClosedTreasure from 'assets/icons/closedTreasure.svg';
import Crossbow from 'assets/icons/crossbow.svg';
import HermesBoots from 'assets/icons/hermesBoots.svg';
import Trap from 'assets/icons/trap.svg';
import CaveEntry from 'assets/icons/caveEntry.svg';
import CaveExit from 'assets/icons/caveExit.svg';
import Player from 'assets/icons/player.svg';

export interface ICell {
  id: string;
  content: CellContentEnum;
}

export enum CellContentEnum {
  Empty = 'EMPTY',
  Crossbow = 'CROSSBOW',
  HermesBoots = 'HERMES_BOOTS',
  Trap = 'TRAP',
  CaveEntry1 = 'CAVE_ENTRY_1',
  CaveEntry2 = 'CAVE_ENTRY_2',
  CaveEntry3 = 'CAVE_ENTRY_3',
  CaveEntry4 = 'CAVE_ENTRY_4',
  CaveExit1 = 'CAVE_EXIT_1',
  CaveExit2 = 'CAVE_EXIT_2',
  CaveExit3 = 'CAVE_EXIT_3',
  CaveExit4 = 'CAVE_EXIT_4',
  Treasure = 'TREASURE',
  FalseTreasure1 = 'FALSE_TREASURE_1',
  FalseTreasure2 = 'FALSE_TREASURE_2',
  FalseTreasure3 = 'FALSE_TREASURE_3',
  ClosedTreasure1 = 'CLOSED_TREASURE_1',
  ClosedTreasure2 = 'CLOSED_TREASURE_2',
  ClosedTreasure3 = 'CLOSED_TREASURE_3',
  ClosedTreasure4 = 'CLOSED_TREASURE_4',
  Player = 'Player'
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
    case CellContentEnum.CaveEntry1:
    case CellContentEnum.CaveEntry2:
    case CellContentEnum.CaveEntry3:
    case CellContentEnum.CaveEntry4:
      return CaveEntry;
    case CellContentEnum.CaveExit1:
    case CellContentEnum.CaveExit2:
    case CellContentEnum.CaveExit3:
    case CellContentEnum.CaveExit4:
      return CaveExit;
    case CellContentEnum.Player:
      return Player;
  }
};
