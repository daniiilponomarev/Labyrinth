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
  contentIcon: CellContentIconEnum;
  contentText: CellContentTextEnum;
}

export enum CellContentTextEnum {
  Empty = 'Empty',
  Crossbow = 'Crossbow',
  HermesBoots = 'Hermes Boots',
  Trap = 'Trap',
  CaveEntry1 = 'Cave Entry',
  CaveEntry2 = 'Cave Entry',
  CaveEntry3 = 'Cave Entry',
  CaveEntry4 = 'Cave Entry',
  CaveExit1 = 'Cave Exit',
  CaveExit2 = 'Cave Exit',
  CaveExit3 = 'Cave Exit',
  CaveExit4 = 'Cave Exit',
  Treasure = 'Treasure',
  FalseTreasure1 = 'False Treasure',
  FalseTreasure2 = 'False Treasure',
  FalseTreasure3 = 'False Treasure',
  ClosedTreasure1 = 'Closed Treasure',
  ClosedTreasure2 = 'Closed Treasure',
  ClosedTreasure3 = 'Closed Treasure',
  ClosedTreasure4 = 'Closed Treasure',
  Player = 'Player'
}

export enum CellContentIconEnum {
  Empty = '',
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

export const CellContentArray = [
  { id: 'Empty', icon: CellContentIconEnum.Empty, text: CellContentTextEnum.Empty },
  { id: 'Crossbow', icon: CellContentIconEnum.Crossbow, text: CellContentTextEnum.Crossbow },
  { id: 'HermesBoots', icon: CellContentIconEnum.HermesBoots, text: CellContentTextEnum.HermesBoots },
  { id: 'Trap', icon: CellContentIconEnum.Trap, text: CellContentTextEnum.Trap },
  { id: 'CaveEntry1', icon: CellContentIconEnum.CaveEntry1, text: CellContentTextEnum.CaveEntry1 },
  { id: 'CaveEntry2', icon: CellContentIconEnum.CaveEntry2, text: CellContentTextEnum.CaveEntry2 },
  { id: 'CaveEntry3', icon: CellContentIconEnum.CaveEntry3, text: CellContentTextEnum.CaveEntry3 },
  { id: 'CaveEntry4', icon: CellContentIconEnum.CaveEntry4, text: CellContentTextEnum.CaveEntry4 },
  { id: 'CaveExit1', icon: CellContentIconEnum.CaveExit1, text: CellContentTextEnum.CaveExit1 },
  { id: 'CaveExit2', icon: CellContentIconEnum.CaveExit2, text: CellContentTextEnum.CaveExit2 },
  { id: 'CaveExit3', icon: CellContentIconEnum.CaveExit3, text: CellContentTextEnum.CaveExit3 },
  { id: 'CaveExit4', icon: CellContentIconEnum.CaveExit4, text: CellContentTextEnum.CaveExit4 },
  { id: 'Treasure', icon: CellContentIconEnum.Treasure, text: CellContentTextEnum.Treasure },
  { id: 'FalseTreasure1', icon: CellContentIconEnum.FalseTreasure1, text: CellContentTextEnum.FalseTreasure1 },
  { id: 'FalseTreasure2', icon: CellContentIconEnum.FalseTreasure2, text: CellContentTextEnum.FalseTreasure2 },
  { id: 'FalseTreasure3', icon: CellContentIconEnum.FalseTreasure3, text: CellContentTextEnum.FalseTreasure3 },
  { id: 'ClosedTreasure1', icon: CellContentIconEnum.ClosedTreasure1, text: CellContentTextEnum.ClosedTreasure1 },
  { id: 'ClosedTreasure2', icon: CellContentIconEnum.ClosedTreasure2, text: CellContentTextEnum.ClosedTreasure2 },
  { id: 'ClosedTreasure3', icon: CellContentIconEnum.ClosedTreasure3, text: CellContentTextEnum.ClosedTreasure3 },
  { id: 'ClosedTreasure4', icon: CellContentIconEnum.ClosedTreasure4, text: CellContentTextEnum.ClosedTreasure4 },
  { id: 'Player', icon: CellContentIconEnum.Player, text: CellContentTextEnum.Player }
];

export const CellMenuArray = [
  { id: 'Empty', icon: CellContentIconEnum.Empty, text: CellContentTextEnum.Empty },
  { id: 'Treasure', icon: CellContentIconEnum.Treasure, text: CellContentTextEnum.Treasure },
  { id: 'FalseTreasure', icon: CellContentIconEnum.FalseTreasure1, text: CellContentTextEnum.FalseTreasure1 },
  { id: 'CaveEntry', icon: CellContentIconEnum.CaveEntry1, text: CellContentTextEnum.CaveEntry1 },
  { id: 'CaveExit', icon: CellContentIconEnum.CaveExit1, text: CellContentTextEnum.CaveExit1 },
  { id: 'Crossbow', icon: CellContentIconEnum.Crossbow, text: CellContentTextEnum.Crossbow },
  { id: 'HermesBoots', icon: CellContentIconEnum.HermesBoots, text: CellContentTextEnum.HermesBoots },
  { id: 'Trap', icon: CellContentIconEnum.Trap, text: CellContentTextEnum.Trap }
];

export const getContentIcon = (content: string) => {
  switch (content) {
    case CellContentIconEnum.Treasure:
      return Treasure;
    case CellContentIconEnum.FalseTreasure1:
    case CellContentIconEnum.FalseTreasure2:
    case CellContentIconEnum.FalseTreasure3:
      return FalseTreasure;
    case CellContentIconEnum.ClosedTreasure1:
    case CellContentIconEnum.ClosedTreasure2:
    case CellContentIconEnum.ClosedTreasure3:
    case CellContentIconEnum.ClosedTreasure4:
      return ClosedTreasure;
    case CellContentIconEnum.Crossbow:
      return Crossbow;
    case CellContentIconEnum.HermesBoots:
      return HermesBoots;
    case CellContentIconEnum.Trap:
      return Trap;
    case CellContentIconEnum.CaveEntry1:
    case CellContentIconEnum.CaveEntry2:
    case CellContentIconEnum.CaveEntry3:
    case CellContentIconEnum.CaveEntry4:
      return CaveEntry;
    case CellContentIconEnum.CaveExit1:
    case CellContentIconEnum.CaveExit2:
    case CellContentIconEnum.CaveExit3:
    case CellContentIconEnum.CaveExit4:
      return CaveExit;
    case CellContentIconEnum.Player:
      return Player;
  }
};
