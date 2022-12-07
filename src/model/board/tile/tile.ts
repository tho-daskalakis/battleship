import { Ship } from '../../ship/ship';
import { Position, xPosition, yPosition } from './position';

interface Tile {
  coords: Position;
  getHit: Function;
  hit: Function;
  getShipIndex: Function;
  setShipIndex: Function;
}

type ShipIndex = 0 | 1 | 2 | 3 | 4;

function tileFactory(x: xPosition, y: yPosition): Tile {
  const coords = { x, y };
  let isHit = false;

  /**
   * 0: Carrier, 1: Battleship, 2:Destroyer, 3: Submarine, 4: Patrol Boat
   */
  let shipIndex: ShipIndex | null = null;

  function getHit() {
    return isHit;
  }

  function hit(shipArr: Array<Ship>): void {
    if (isHit) return;

    isHit = true;

    // Check for ship on tile, hit ship if true
    if (shipIndex !== null) {
      shipArr[shipIndex].hit();
    }
  }

  function getShipIndex(): ShipIndex | null {
    return shipIndex;
  }

  function setShipIndex(index: ShipIndex): void {
    shipIndex = index;
  }

  return {
    coords,
    getHit,
    hit,
    getShipIndex,
    setShipIndex,
  };
}

export { Tile, ShipIndex, tileFactory };

module.exports = { tileFactory };
