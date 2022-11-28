interface Ship {
  name: string;
  length: number;
  getHits: Function;
  hit: Function;
  isSunk: Function;
}

function shipFactory(shipName: string, shipLength: number): Ship {
  const name = shipName;
  const length = shipLength;
  let hits = 0;
  let sunk = false;

  function getHits(): number {
    return hits;
  }

  /**
   * Increase number of hits. Update sunk status.
   */
  function hit(): void {
    if (sunk) return;

    hits++;

    if (hits >= length) sunk = true;
  }

  /**
   * @returns True if ship is sunk.
   */
  function isSunk(): boolean {
    return sunk;
  }

  return {
    name,
    length,
    getHits,
    isSunk,
    hit,
  };
}

export { Ship, shipFactory };

module.exports = { shipFactory };
