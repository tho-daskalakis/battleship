const computerAI = require('./computerAI');
const gameData = require('../../../utils/gameData');

const testComputer = computerAI.computerFactory('Computer');
const testDefender = computerAI.computerFactory('Defender');

beforeAll(() => {
  testComputer.init();
  testDefender.init();
});

test('computer has a name', () => {
  expect(testComputer.name).toBe('Computer');
});

test('computer has a findLegalMoves method', () => {
  expect(testComputer.findLegalMoves).toBeDefined();
});

test('computer has a makeRandomMove method', () => {
  expect(testComputer.makeRandomMove).toBeDefined();
});

describe('computer attacks defender', () => {
  beforeEach(() => {
    const legalMoves = testComputer.findLegalMoves(testDefender.getBoard());
    const attackCoords = testComputer.makeRandomMove(legalMoves);
    testDefender.getBoard().receiveAttack(attackCoords);
  });

  test('after one attack, one enemy tile is hit', () => {
    expect(gameData.getBoardHits(testDefender.getBoard())).toBe(1);
  });

  test('after two attacks, two enemy tiles are hit', () => {
    expect(gameData.getBoardHits(testDefender.getBoard())).toBe(2);
  });
});
