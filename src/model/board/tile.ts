interface Position {
  x: number;
  y: string;
}

interface Tile {
  coords: Position;
  isHit: boolean;
  ship: Ship | null;
  getShip: object;
}

function tileFactory(x: number, y: string): Tile {
  const coords = { x, y };
  let isHit = false;
  let ship: Ship | null = null;

  function getShip(): Ship | null {
    return ship;
  }

  return {
    coords,
    isHit,
    ship,
    getShip,
  };
}

export { tileFactory };
