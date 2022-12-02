import { lettersToArrIndex } from '../../utils/convertBoardUnits';
import { Ship, shipFactory } from '../ship/ship';
import { Position } from './tile/position';
import { Tile, tileFactory } from './tile/tile';

interface Board {
  init: Function;
  placeShip: Function;
  getBoard: Function;
  getTile: Function;
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
  function placeShip(pos: Position, ship: Ship, vertical: boolean): void {
    // Check available space for ship based on rotation
    const shipFitsBoard = vertical
      ? 10 - (lettersToArrIndex(pos.y) + 1) + 1 - ship.length >= 0
      : 10 - pos.x + 1 - ship.length >= 0;

    if (shipFitsBoard) {
      // Place ship according to rotation
      if (vertical) {
        // Check for vertical ship overlap
        for (let i = 0; i < ship.length; i++) {
          // Tiles with no ship return null as ship value
          const hasShip =
            board[pos.x - 1][lettersToArrIndex(pos.y) + i].getShip();
          if (hasShip) {
            console.log('ship already placed');
            return;
          }
        }

        // Space clear, place ship
        for (let i = 0; i < ship.length; i++) {
          console.log(
            `placing ${ship.name} at ${pos.x - 1}, ${
              lettersToArrIndex(pos.y) + i
            }`
          );

          board[pos.x - 1][lettersToArrIndex(pos.y) + i].setShip(
            shipFactory(ship.name, ship.length)
          );
        }
      } else {
        // Check for horizontal ship overlap
        for (let i = 0; i < ship.length; i++) {
          // Tiles with no ship return null as ship value
          const hasShip =
            board[pos.x - 1 + i][lettersToArrIndex(pos.y)].getShip();
          if (hasShip) {
            console.log('ship already placed');
            return;
          }
        }

        // Space clear, place ship
        for (let i = 0; i < ship.length; i++) {
          console.log(
            `placing ${ship.name} at ${pos.x - 1 + i}, ${lettersToArrIndex(
              pos.y
            )}`
          );

          board[pos.x - 1 + i][lettersToArrIndex(pos.y)].setShip(
            shipFactory(ship.name, ship.length)
          );
        }
      }
    } else {
      // TODO: Handle ship out of bounds
      console.log(`${ship.name} does not fit on board`);
    }
  }

  function receiveAttack(pos: Position): void {
    const currBoard = getBoard();
    if (currBoard[pos.x - 1][lettersToArrIndex(pos.y)].getShip() === null) {
      // No ship, just mark tile as hit
    } else {
      // Call hit method on ship
    }
  }

  function getBoard() {
    return board;
  }

  function getTile(pos: Position): Tile {
    return board[pos.x - 1][lettersToArrIndex(pos.y)];
  }

  return {
    init,
    placeShip,
    getBoard,
    getTile,
  };
}

export { boardFactory };

module.exports = { boardFactory };
