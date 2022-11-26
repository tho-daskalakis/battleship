const ship = require('./ship');

test('create ship of length 5', () => {
  console.log({ ship });
  expect(ship.shipFactory(5).length).toBe(5);
});
