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
    expect(testBoard.getTile({ x: 1, y: 'A' }).coords).toEqual(
      testTile1.coords
    );
  });

  test('board[1][1] should have tile (2, B)', () => {
    expect(testBoard.getTile({ x: 2, y: 'B' }).coords).toEqual(
      testTile2.coords
    );
  });

  test('board[9][9] should have tile (10, J)', () => {
    expect(testBoard.getTile({ x: 10, y: 'J' }).coords).toEqual(
      testTile3.coords
    );
  });
});

describe('set ship vertically on board', () => {
  const testBoard = board.boardFactory();
  const testShip = ship.shipFactory('Patrol boat', 2);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'A' }, testShip, true);
  });

  test('tile (1, A) should have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'A' }).getShip().name).toBe(
      'Patrol boat'
    );
  });

  test('tile (1, B) should have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'B' }).getShip().name).toBe(
      'Patrol boat'
    );
  });

  test('tile (2, A) should NOT have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 2, y: 'A' }).getShip()).toBeNull();
  });

  test('tile (1, C) should NOT have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'C' }).getShip()).toBeNull();
  });
});

describe('set ship horizontally on board', () => {
  const testBoard = board.boardFactory();
  const testShip = ship.shipFactory('Patrol boat', 2);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'A' }, testShip, false);
  });

  test('tile (1, A) should have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'A' }).getShip().name).toBe(
      'Patrol boat'
    );
  });

  test('tile (2, A) should have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 2, y: 'A' }).getShip().name).toBe(
      'Patrol boat'
    );
  });

  test('tile (1, B) should NOT have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'B' }).getShip()).toBeNull();
  });

  test('tile (3, A) should NOT have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 3, y: 'A' }).getShip()).toBeNull();
  });
});

describe('ship overlapping', () => {
  const testBoard = board.boardFactory();
  const patrolBoat = ship.shipFactory('Patrol boat', 2);
  const submarine = ship.shipFactory('Submarine', 3);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'A' }, patrolBoat, true);
    testBoard.placeShip({ x: 1, y: 'A' }, submarine, true);
    testBoard.placeShip({ x: 1, y: 'A' }, submarine, false);
    testBoard.placeShip({ x: 8, y: 'I' }, submarine, false);
  });

  test('tile (1, A) should have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'A' }).getShip().name).toBe(
      'Patrol boat'
    );
  });

  test('tile (8, I) should have a Submaribe', () => {
    expect(testBoard.getTile({ x: 8, y: 'I' }).getShip().name).toBe(
      'Submarine'
    );
  });
});

describe('ship object should be the same across tiles', () => {
  const testBoard = board.boardFactory();
  const patrolBoat = ship.shipFactory('Patrol boat', 2);

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'B' }, patrolBoat, false);

    // Hit tiles (1, B), (2, B) where the ship is placed
    testBoard.getTile({ x: 1, y: 'B' }).hit();
    testBoard.getTile({ x: 2, y: 'B' }).hit();
  });

  test('tile (1, B) should have a Patrol boat', () => {
    expect(testBoard.getTile({ x: 1, y: 'B' }).getShip().name).toBe(
      'Patrol boat'
    );
  });

  test('tile (1, B) is hit', () => {
    expect(testBoard.getTile({ x: 1, y: 'B' }).isHit).toBeTruthy();
  });
});
