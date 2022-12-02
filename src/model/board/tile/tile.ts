import { Ship } from '../../ship/ship';
import { Position, xPosition, yPosition } from './position';

interface Tile {
  coords: Position;
  isHit: boolean;
  hit: Function;
  getShip: Function;
  setShip: Function;
}

function tileFactory(x: xPosition, y: yPosition): Tile {
  const coords = { x, y };
  let isHit = false;
  let ship: Ship | null = null;

  function hit(): void {
    isHit = true;

    if (ship) ship.hit();
  }

  function getShip(): Ship | null {
    return ship;
  }

  function setShip(tileShip: Ship): void {
    ship = tileShip;
  }

  return {
    coords,
    isHit,
    hit,
    getShip,
    setShip,
  };
}

export { Tile, tileFactory };

module.exports = { tileFactory };
