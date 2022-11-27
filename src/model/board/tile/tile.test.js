const tile = require('./tile');

describe('default tile', () => {
  let testTile;

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
    expect(testTile.getShip()).toBeNull();
  });
});
