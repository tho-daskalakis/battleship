import { xPosition } from './tile/position';
import { Tile, tileFactory } from './tile/tile';

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

export { boardFactory };
