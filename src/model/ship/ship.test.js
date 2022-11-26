const ship = require('./ship');

test('create ship of length 5', () => {
  expect(ship.shipFactory(5).length).toBe(5);
});

test('new ship should not be sunk', () => {
  expect(ship.shipFactory().isSunk()).toBeFalsy();
});

test('new ship should start with 0 hits', () => {
  expect(ship.shipFactory().hits).toBe(0);
});

describe('hitting ships', () => {
  const testShip = ship.shipFactory(1);
  const startingHits = 0;

  beforeEach(() => {
    testShip.hit();
    console.log({ testShip });
  });

  afterEach(() => {
    testShip.hits = 0;
  });

  test('hit() should increase hits by 1', () => {
    expect(testShip.hits).toBe(startingHits + 1);
  });

  test('ship of length 1 should be sunk after 1 hit', () => {
    expect(testShip.isSunk()).toBeTruthy();
  });
});
