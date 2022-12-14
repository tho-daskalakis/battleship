function createBoardDisplay(): HTMLDivElement {
  const div = document.createElement('div');

  div.id = 'board-display';

  div.appendChild(boardFactory());
  div.appendChild(boardFactory());

  return div;
}

function boardFactory(): HTMLDivElement {
  const div = document.createElement('div');

  div.classList.add('board');

  return div;
}

export { createBoardDisplay };
