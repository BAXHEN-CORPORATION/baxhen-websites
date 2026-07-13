import * as migration_20260713_091400 from './20260713_091400';

export const migrations = [
  {
    up: migration_20260713_091400.up,
    down: migration_20260713_091400.down,
    name: '20260713_091400'
  },
];
