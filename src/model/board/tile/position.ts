interface xPosition {
  x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

interface yPosition {
  y: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';
}

interface Position {
  x: xPosition;
  y: yPosition;
}

export { xPosition, yPosition, Position };
