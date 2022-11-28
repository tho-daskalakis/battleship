import { Ship } from '../ship/ship';
import { Position } from './tile/position';
import { Tile, tileFactory } from './tile/tile';

interface Board {
  init: object;
  placeShip: object;
  getBoard: object;
}

function boardFactory(): Board {
  const board: Array<Array<Tile>> = [];

  const xArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  function init(): void {
    // Initialize board
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i].push(tileFactory(xArr[i], yArr[j]));
      }
    }
  }

  /**
   * Places a ship horizontally on the board, extending
   * to the right of the starting position. Vertical placement extends the ship
   * down from the starting position. The ship is always extended to the
   * ascending direction of the respective axis.
   * @param pos The starting placement coordinates.
   * @param ship The ship to be placed.
   * @param vertical True if ship is placed vertically.
   */
  function placeShip(
    pos: Position,
    ship: Ship,
    vertical: boolean = false
  ): void {}

  function getBoard() {
    return board;
  }

  return {
    init,
    placeShip,
    getBoard,
  };
}

export { boardFactory };

module.exports = { boardFactory };
