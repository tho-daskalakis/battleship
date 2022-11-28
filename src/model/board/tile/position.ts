const xPosArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type xPosition = typeof xPosArr[number];

const yPosArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
type yPosition = typeof yPosArr[number];

interface Position {
  x: xPosition;
  y: yPosition;
}

export { xPosition, yPosition, Position };
