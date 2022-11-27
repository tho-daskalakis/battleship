import { Ship } from '../../ship/ship';
import { Position, xPosition, yPosition } from './position';

interface Tile {
  coords: Position;
  isHit: boolean;
  getShip: object;
}

function tileFactory(x: xPosition, y: yPosition): Tile {
  const coords = { x, y };
  let isHit = false;
  let ship: Ship | null = null;

  function getShip(): Ship | null {
    return ship;
  }

  return {
    coords,
    isHit,
    getShip,
  };
}

export { tileFactory };

module.exports = { tileFactory };
