function lettersToArrIndex(letter: string): number {
  const yArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  return yArr.indexOf(letter, 0);
}

export { lettersToArrIndex };

module.exports = { lettersToArrIndex };
