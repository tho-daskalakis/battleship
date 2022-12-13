import { getRandomInt } from '../../../utils/randomNumbers';
import { Board } from '../../board/board';
import { Position, xArr, yArr } from '../../board/tile/position';
import { Tile } from '../../board/tile/tile';
import { Player, playerFactory } from '../player';

interface ComputerAI extends Player {
  findLegalMoves: Function;
  makeRandomMove: Function;
}

function computerFactory(name: string): ComputerAI {
  const computer = playerFactory(name) as ComputerAI;

  computer.findLegalMoves = (enemyBoard: Board): Array<Tile> => {
    const legalTiles: Array<Tile> = [];

    xArr.forEach((x) => {
      yArr.forEach((y) => {
        const tile = enemyBoard.getTile({ x: x, y: y });

        if (!tile.getHit()) {
          // Tile is not hit, append it for return
          legalTiles.push(tile);
        }
      });
    });
    return legalTiles;
  };

  computer.makeRandomMove = (legalMoves: Array<Tile>): Position => {
    const length = legalMoves.length;
    const randomIndex = getRandomInt(length);
    const tileAttacked = legalMoves[randomIndex];

    return tileAttacked.coords;
  };

  return computer;
}

export { ComputerAI, computerFactory };

module.exports = { computerFactory };
