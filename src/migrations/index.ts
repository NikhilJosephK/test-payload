import * as migration_20250226_191613_init from './20250226_191613_init';

export const migrations = [
  {
    up: migration_20250226_191613_init.up,
    down: migration_20250226_191613_init.down,
    name: '20250226_191613_init'
  },
];
