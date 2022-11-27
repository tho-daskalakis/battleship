import { Tile } from './tile/tile';

interface Board {
  board: Array<Array<Tile>>;
  init: object;
}

function boardFactory(): Board {
  const board: Array<Array<Tile>> = [];

  function init(): void {
    // Initialize board
  }

  return {
    board,
    init,
  };
}
