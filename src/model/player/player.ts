import { Board, boardFactory } from '../board/board';
import { Position } from '../board/tile/position';

interface Player {
  name: string;
  init: Function;
  getBoard: Function;
  attack: Function;
}

function playerFactory(name: string): Player {
  const board = boardFactory();

  function init() {
    board.init();
  }

  function attack(pos: Position): Position {
    return pos;
  }

  function getBoard(): Board {
    return board;
  }

  return {
    name,
    init,
    attack,
    getBoard,
  };
}

export { Player, playerFactory };

module.exports = { playerFactory };
