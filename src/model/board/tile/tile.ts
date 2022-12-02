import { Ship } from '../../ship/ship';
import { Position, xPosition, yPosition } from './position';

interface Tile {
  coords: Position;
  getHit: Function;
  hit: Function;
  getShip: Function;
  setShip: Function;
}

function tileFactory(x: xPosition, y: yPosition): Tile {
  const coords = { x, y };
  let isHit = false;
  let ship: Ship | null = null;

  function getHit() {
    return isHit;
  }

  function hit(): void {
    if (isHit) return;

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
    getHit,
    hit,
    getShip,
    setShip,
  };
}

export { Tile, tileFactory };

module.exports = { tileFactory };
