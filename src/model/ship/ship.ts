interface Ship {
  length: number;
  getHits: object;
  hit: object;
  isSunk: object;
}

function shipFactory(shipLength: number): Ship {
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
    // if (sunk) return;

    console.log('hit() is called, hits:', hits);
    hits++;
    console.log('hits:', hits);

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
    getHits,
    isSunk,
    hit,
  };
}

module.exports = { shipFactory };
