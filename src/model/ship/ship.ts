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
   * Increase number of hits. Update sunk status.
   */
  function hit(): void {
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
    length,
    hits,
    sunk,
    hit,
    isSunk,
  };
}
