import { Board } from '../model/board/board';

function getBoardHits(board: Board): number {
  let boardHits = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board.getBoard()[i][j].getHit()) {
        boardHits++;
      }
    }
  }

  return boardHits;
}

export { getBoardHits };

module.exports = { getBoardHits };
