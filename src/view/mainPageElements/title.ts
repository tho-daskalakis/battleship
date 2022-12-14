function createTitle(): HTMLHeadingElement {
  const h1 = document.createElement('h1');

  h1.id = 'title';
  h1.textContent = 'Battleship';

  return h1;
}

export { createTitle };
