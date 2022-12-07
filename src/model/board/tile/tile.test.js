const tile = require('./tile');
const ship = require('../../ship/ship');

let testTile;
describe('default tile of coords(0, A)', () => {
  beforeAll(() => {
    testTile = tile.tileFactory(0, 'A');
  });

  test('tile coordinates should be (0, A)', () => {
    expect(testTile.coords).toStrictEqual({ x: 0, y: 'A' });
  });

  test('tile should not be hit when created', () => {
    expect(testTile.isHit).toBeFalsy();
  });

  test('tile should start with no ship (null)', () => {
    expect(testTile.getShipIndex()).toBeNull();
  });
});

describe('ships on tiles', () => {
  const testShipIndex = 0;

  beforeAll(() => {
    testTile.setShipIndex(0);
  });

  test('test ship index', () => {
    expect(testTile.getShipIndex()).toBe(testShipIndex);
  });
});
