const player = require('./player');

describe('player init', () => {
  const testPlayer = player.playerFactory('Computer');

  beforeAll(() => {
    testPlayer.init();
  });

  test('player has name', () => {
    expect(testPlayer.name).toBe('Computer');
  });
});

describe("players can attack other player's boards", () => {
  const player1 = player.playerFactory('Player 1');
  const player2 = player.playerFactory('Player 2');

  beforeAll(() => {
    player1.init();
    player2.init();

    player1.getBoard().placeShip({ x: 1, y: 'A' }, 0, true);
    player2.getBoard().placeShip({ x: 9, y: 'J' }, 4, false);

    const playerOneAttack = player1.attack({ x: 10, y: 'J' });
    player2.getBoard().receiveAttack(playerOneAttack); // Should hit Patrol Boat

    const playerTwoAttack = player2.attack({ x: 1, y: 'B' });
    player1.getBoard().receiveAttack(playerTwoAttack); // Should hit Carrier
  });

  test('player1 board is hit at (1, B)', () => {
    expect(player1.getBoard().getTile({ x: 1, y: 'B' }).getHit()).toBeTruthy();
  });

  test('player1 carrier is hit 1 time', () => {
    expect(player1.getBoard().shipArr[0].getHits()).toBe(1);
  });

  test('player2 board is hit at (10, J)', () => {
    expect(player2.getBoard().getTile({ x: 10, y: 'J' }).getHit()).toBeTruthy();
  });

  test('player2 patrol boat is hit 1 time', () => {
    expect(player2.getBoard().shipArr[4].getHits()).toBe(1);
  });
});
