export enum CellContent {
  Crossbow = 'CROSSBOW',
  HermesBoots = 'HERMES_BOOTS',
  Trap = 'TRAP',
  PitEntry1 = 'PIT_ENTRY_1',
  PitEntry2 = 'PIT_ENTRY_2',
  PitEntry3 = 'PIT_ENTRY_3',
  PitEntry4 = 'PIT_ENTRY_4',
  PitExit1 = 'PIT_EXIT_1',
  PitExit2 = 'PIT_EXIT_2',
  PitExit3 = 'PIT_EXIT_3',
  PitExit4 = 'PIT_EXIT_4',
  Treasure = 'TREASURE',
  FalseTreasure1 = 'FALSE_TREASURE_1',
  FalseTreasure2 = 'FALSE_TREASURE_2',
  FalseTreasure3 = 'FALSE_TREASURE_3',
}

export interface ICell {
  id: string;
  content: CellContent;
}
