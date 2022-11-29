const board = require('./board');
const tile = require('./tile/tile');
const ship = require('../ship/ship');

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

describe('set ship vertically on board', () => {
  const testBoard = board.boardFactory();
  const testShip = ship.shipFactory('Patrol boat', 2);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 0, y: 'A' }, testShip, true);
  });

  test('tile (0, 0) should have a Patrol boat', () => {
    expect(testBoard.getBoard()[0][0].getShip().name).toBe('Patrol boat');
  });

  test('tile (0, 1) should have a Patrol boat', () => {
    expect(testBoard.getBoard()[0][1].getShip().name).toBe('Patrol boat');
  });

  test('tile (1, 0) should NOT have a Patrol boat', () => {
    expect(testBoard.getBoard()[1][0].getShip()).toBeNull();
  });

  test('tile (0, 2) should NOT have a Patrol boat', () => {
    expect(testBoard.getBoard()[0][2].getShip()).toBeNull();
  });
});

describe('set ship horizontally on board', () => {
  const testBoard = board.boardFactory();
  const testShip = ship.shipFactory('Patrol boat', 2);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 0, y: 'A' }, testShip, false);
  });

  test('tile (0, 0) should have a Patrol boat', () => {
    expect(testBoard.getBoard()[0][0].getShip().name).toBe('Patrol boat');
  });

  test('tile (1, 0) should have a Patrol boat', () => {
    expect(testBoard.getBoard()[1][0].getShip().name).toBe('Patrol boat');
  });

  test('tile (0, 1) should NOT have a Patrol boat', () => {
    expect(testBoard.getBoard()[0][1].getShip()).toBeNull();
  });

  test('tile (2, 0) should NOT have a Patrol boat', () => {
    expect(testBoard.getBoard()[2][0].getShip()).toBeNull();
  });
});

describe('ship overlapping', () => {
  const testBoard = board.boardFactory();
  const patrolBoat = ship.shipFactory('Patrol boat', 2);
  const submarine = ship.shipFactory('Submarine', 3);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 0, y: 'A' }, patrolBoat, true);
    testBoard.placeShip({ x: 0, y: 'A' }, submarine, true);
    testBoard.placeShip({ x: 0, y: 'A' }, submarine, false);
  });

  test('tile (0, 0) should have a patrol boat', () => {
    expect(testBoard.getBoard()[0][0].getShip().name).toBe('Patrol boat');
  });
});
