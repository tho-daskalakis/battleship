const board = require('./board');
const tile = require('./tile/tile');

describe('board init', () => {
  const testBoard = board.boardFactory();
  const testTile1 = tile.tileFactory(1, 'A');
  const testTile2 = tile.tileFactory(2, 'B');
  const testTile3 = tile.tileFactory(10, 'J');

  beforeAll(() => {
    testBoard.init();
  });

  test('board[0][0] should have tile (1, A)', () => {
    expect(testBoard.getBoard()[0][0].coords).toEqual(testTile1.coords);
  });

  test('board[1][1] should have tile (2, B)', () => {
    expect(testBoard.getBoard()[1][1].coords).toEqual(testTile2.coords);
  });

  test('board[9][9] should have tile (10, J)', () => {
    expect(testBoard.getBoard()[9][9].coords).toEqual(testTile3.coords);
  });
});
