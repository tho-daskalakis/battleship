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
  const testShipIndex = 4;

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'A' }, testShipIndex, true);
  });

  test('tile (1, A) should have a Patrol Boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'A' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Patrol Boat');
  });

  test('tile (1, B) should have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'B' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Patrol Boat');
  });

  test('tile (2, A) should NOT have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 2, y: 'A' }).getShipIndex();
    expect(tileIndex).toBeNull();
  });

  test('tile (1, C) should NOT have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'C' }).getShipIndex();
    expect(tileIndex).toBeNull();
  });
});

describe('set ship horizontally on board', () => {
  const testBoard = board.boardFactory();
  const testShipIndex = 4;

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'A' }, testShipIndex, false);
  });

  test('tile (1, A) should have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'A' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Patrol Boat');
  });

  test('tile (2, A) should have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 2, y: 'A' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Patrol Boat');
  });

  test('tile (1, B) should NOT have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'B' }).getShipIndex();
    expect(tileIndex).toBeNull();
  });

  test('tile (3, A) should NOT have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 3, y: 'A' }).getShipIndex();
    expect(tileIndex).toBeNull();
  });
});

describe('ship overlapping', () => {
  const testBoard = board.boardFactory();
  const patrolBoatIndex = 4;
  const submarineIndex = 3;

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'A' }, patrolBoatIndex, true);
    testBoard.placeShip({ x: 1, y: 'A' }, submarineIndex, true);
    testBoard.placeShip({ x: 1, y: 'A' }, submarineIndex, false);
    testBoard.placeShip({ x: 8, y: 'I' }, submarineIndex, false);
  });

  test('tile (1, A) should have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'A' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Patrol Boat');
  });

  test('tile (8, I) should have a Submaribe', () => {
    const tileIndex = testBoard.getTile({ x: 8, y: 'I' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Submarine');
  });
});

describe('ship object should be the same across tiles', () => {
  const testBoard = board.boardFactory();
  const patrolBoatIndex = 4;

  beforeAll(() => {
    testBoard.init();
    testBoard.placeShip({ x: 1, y: 'B' }, patrolBoatIndex, false);

    // Hit tiles (1, B), (2, B) where the ship is placed
    testBoard.receiveAttack({ x: 1, y: 'B' });
    testBoard.receiveAttack({ x: 2, y: 'B' });
  });

  test('tile (1, B) should have a Patrol boat', () => {
    const tileIndex = testBoard.getTile({ x: 1, y: 'B' }).getShipIndex();
    expect(testBoard.shipArr[tileIndex].name).toBe('Patrol Boat');
  });

  test('tile (1, B) is hit', () => {
    expect(testBoard.getTile({ x: 1, y: 'B' }).getHit()).toBeTruthy();
  });

  test('tile (2, B) is hit', () => {
    expect(testBoard.getTile({ x: 2, y: 'B' }).getHit()).toBeTruthy();
  });

  test('patrol boat on (1, B) should have 2 hits', () => {
    const shipIndex = testBoard.getTile({ x: 1, y: 'B' }).getShipIndex();
    expect(testBoard.shipArr[shipIndex].getHits()).toBe(2);
  });
});

describe('allShipsSunk()', () => {
  const testBoard = board.boardFactory();

  beforeAll(() => {
    testBoard.init();

    // Place ships
    testBoard.placeShip({ x: 1, y: 'A' }, 0, false);
    testBoard.placeShip({ x: 1, y: 'B' }, 1, false);
    testBoard.placeShip({ x: 1, y: 'C' }, 2, false);
    testBoard.placeShip({ x: 1, y: 'D' }, 3, false);
    testBoard.placeShip({ x: 1, y: 'E' }, 4, false);

    // Sink Carrier
    const carrier = testBoard.shipArr[0];
    for (let i = 1; i <= carrier.length; i++) {
      testBoard.receiveAttack({ x: i, y: 'A' });
    }

    // Sink Battleship
    const battleship = testBoard.shipArr[1];
    for (let i = 1; i <= battleship.length; i++) {
      testBoard.receiveAttack({ x: i, y: 'B' });
    }

    // Sink Destroyer
    const destroyer = testBoard.shipArr[2];
    for (let i = 1; i <= destroyer.length; i++) {
      testBoard.receiveAttack({ x: i, y: 'C' });
    }

    // Sink Submarine
    const submarine = testBoard.shipArr[3];
    for (let i = 1; i <= submarine.length; i++) {
      testBoard.receiveAttack({ x: i, y: 'D' });
    }

    // Sink Patrol Boat
    const patrolBoat = testBoard.shipArr[4];
    for (let i = 1; i <= patrolBoat.length; i++) {
      testBoard.receiveAttack({ x: i, y: 'E' });
    }
  });

  test('Carrier is sunk', () => {
    expect(testBoard.shipArr[0].isSunk()).toBeTruthy();
  });

  test('Battleship is sunk', () => {
    expect(testBoard.shipArr[1].isSunk()).toBeTruthy();
  });

  test('Destroyer is sunk', () => {
    expect(testBoard.shipArr[2].isSunk()).toBeTruthy();
  });

  test('Submarine is sunk', () => {
    expect(testBoard.shipArr[3].isSunk()).toBeTruthy();
  });

  test('Patrol Boat is sunk', () => {
    expect(testBoard.shipArr[4].isSunk()).toBeTruthy();
  });

  test('allShipsSunk() returns true', () => {
    expect(testBoard.allShipsSunk()).toBeTruthy();
  });
});
