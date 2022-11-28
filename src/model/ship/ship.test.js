const ship = require('./ship');

test('create ship of length 5', () => {
  expect(ship.shipFactory('', 5).length).toBe(5);
});

test('new ship should not be sunk', () => {
  expect(ship.shipFactory().isSunk()).toBeFalsy();
});

test('new ship should start with 0 hits', () => {
  expect(ship.shipFactory().getHits()).toBe(0);
});

describe('hitting ships', () => {
  let testShip;
  const startingHits = 0;

  beforeEach(() => {
    testShip = ship.shipFactory('', 1);
    testShip.hit();
  });

  afterEach(() => {
    testShip.hits = 0;
  });

  test('hit() should increase hits by 1', () => {
    expect(testShip.getHits()).toBe(startingHits + 1);
  });

  test('ship of length 1 should be sunk after 1 hit', () => {
    expect(testShip.isSunk()).toBeTruthy();
  });
});

describe('sunk ships', () => {
  let testShip;

  beforeAll(() => {
    testShip = ship.shipFactory('', 1);
    testShip.hit();
    testShip.hit();
  });

  test('ship is actually sunk', () => {
    expect(testShip.isSunk()).toBeTruthy();
  });

  test('hits should not be increasing if a ship is sunk', () => {
    expect(testShip.getHits()).toBe(1);
  });
});
