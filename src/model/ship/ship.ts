interface Ship {
  length: number;
  hits: number;
  sunk: boolean;
  hit: object;
  isSunk: object;
}

function shipFactory(shipLength: number): Ship {
  const length = shipLength;
  let hits = 0;
  let sunk = false;

  /**
   * Increase number of hits.
   */
  function hit(): void {
    hits++;
  }

  /**
   * Calculate if ship is sunk by comparing hits and length.
   * @returns True if ship is sunk.
   */
  function isSunk(): boolean {
    if (hits < length) return false;

    return true;
  }

  return {
    length,
    hits,
    sunk,
    hit,
    isSunk,
  };
}
