import * as migration_initial from "./20261007_000000_initial";

export const migrations = [
  {
    up: migration_initial.up,
    down: migration_initial.down,
    name: "20261007_000000_initial",
  },
];
