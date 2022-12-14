import { xArr, yArr } from '../../model/board/tile/position';

function createBoardDisplay(): HTMLDivElement {
  const boardDisplay = document.createElement('div');

  boardDisplay.id = 'board-display';

  boardDisplay.appendChild(playerNameFactory('Player'));
  boardDisplay.appendChild(playerNameFactory('Computer'));
  boardDisplay.appendChild(boardFactory('player-board'));
  boardDisplay.appendChild(boardFactory('computer-board'));

  return boardDisplay;
}

function boardFactory(boardID: string): HTMLDivElement {
  const board = document.createElement('div');
  board.classList.add('board');
  board.id = boardID;

  board.appendChild(emptyDivFactory());
  board.appendChild(coordsFactory('x'));
  board.appendChild(coordsFactory('y'));
  board.appendChild(gridFactory());

  return board;
}

function playerNameFactory(name: string) {
  const playerName = document.createElement('p');
  playerName.classList.add('player-name');

  playerName.textContent = name;

  return playerName;
}

function coordsFactory(axis: string): HTMLDivElement {
  const coords = document.createElement('div');
  coords.classList.add(`${axis}-coords`);

  const coordsArr = axis === 'x' ? xArr : yArr;

  coordsArr.forEach((coord) => {
    const p = document.createElement('p');
    p.textContent = coord.toString();
    coords.appendChild(p);
  });

  return coords;
}

function emptyDivFactory(): HTMLDivElement {
  return document.createElement('div');
}

function gridFactory(): HTMLDivElement {
  const grid = document.createElement('div');
  grid.classList.add('board-grid');

  for (let i = 0; i < 100; i++) {
    grid.appendChild(tileFactory());
  }

  return grid;
}

function tileFactory(): HTMLDivElement {
  const tile = document.createElement('div');
  tile.classList.add('tile');

  return tile;
}

export { createBoardDisplay };
