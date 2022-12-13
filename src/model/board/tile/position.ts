const xArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type xPosition = typeof xArr[number];

const yArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
type yPosition = typeof yArr[number];

interface Position {
  x: xPosition;
  y: yPosition;
}

export { xArr, yArr, xPosition, yPosition, Position };
