const convertBoardUnits = require('./convertBoardUnits');

describe('lettersToArrIndex()', () => {
  const letToArrIndx = convertBoardUnits.lettersToArrIndex;

  test('A should return 0', () => {
    expect(letToArrIndx('A')).toBe(0);
  });

  test('B should return 1', () => {
    expect(letToArrIndx('B')).toBe(1);
  });
  test('J should return 9', () => {
    expect(letToArrIndx('J')).toBe(9);
  });
});
