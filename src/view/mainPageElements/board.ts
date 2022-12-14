import { xArr, yArr } from '../../model/board/tile/position';

function createBoardDisplay(): HTMLDivElement {
  const div = document.createElement('div');

  div.id = 'board-display';

  div.appendChild(playerNameFactory('Player'));
  div.appendChild(playerNameFactory('Computer'));
  div.appendChild(boardFactory('player-board'));
  div.appendChild(boardFactory('computer-board'));

  return div;
}

function boardFactory(boardID: string): HTMLDivElement {
  const div = document.createElement('div');
  div.classList.add('board');
  div.id = boardID;

  div.appendChild(emptyDivFactory());
  div.appendChild(coordsFactory('x'));
  div.appendChild(coordsFactory('y'));
  div.appendChild(gridFactory());

  return div;
}

function playerNameFactory(name: string) {
  const p = document.createElement('p');
  p.classList.add('player-name');

  p.textContent = name;

  return p;
}

function coordsFactory(axis: string): HTMLDivElement {
  const div = document.createElement('div');
  div.classList.add(`${axis}-coords`);

  const coordsArr = axis === 'x' ? xArr : yArr;

  coordsArr.forEach((coord) => {
    const p = document.createElement('p');
    p.textContent = coord.toString();
    div.appendChild(p);
  });

  return div;
}

function emptyDivFactory(): HTMLDivElement {
  return document.createElement('div');
}

function gridFactory(): HTMLDivElement {
  const div = document.createElement('div');
  div.classList.add('board-grid');

  return div;
}

export { createBoardDisplay };
