const ship = require('./ship');

test('create ship of length 5', () => {
  expect(ship.shipFactory(5).length).toBe(5);
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
    testShip = ship.shipFactory(1);
    testShip.hit();
    // console.log({ testShip });
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
