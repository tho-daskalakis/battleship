import { computerFactory } from '../model/player/computerAI/computerAI';
import { playerFactory } from '../model/player/player';
import { createMainPage } from '../view/mainPage';

const players = [playerFactory('Player'), computerFactory('Computer')];

function newGame() {
  clearApp();
  createMainPage();
  initPlayers();

  // For testing
  placeShipsToDefaultPositions();
  showShipsOnBoard();
}

function clearApp() {
  // Remove #app
  const oldApp = document.getElementById('app') as HTMLDivElement;
  const body = document.body;

  oldApp.remove();

  // Create new #app
  const app = document.createElement('div');
  app.id = 'app';
  body.appendChild(app);
}

function initPlayers() {
  players[0].init();
  players[1].init();
}

function placeShipsToDefaultPositions() {
  // Place ships for player
  const player = players[0];
  const playerBoard = player.getBoard();

  // index 0: Carrier
  playerBoard.placeShip({ x: 1, y: 'A' }, 0, false);
  playerBoard.placeShip({ x: 1, y: 'B' }, 1, false);
  playerBoard.placeShip({ x: 1, y: 'C' }, 2, false);
  playerBoard.placeShip({ x: 1, y: 'D' }, 3, false);
  playerBoard.placeShip({ x: 1, y: 'E' }, 4, false);
}

/**
 * Display player's ships on board. Color the tiles that contain a ship,
 * and display the ship name's first letter on the tiles.
 */
function showShipsOnBoard() {
  const player = players[0];
  const playerBoard = player.getBoard();
  const tileGrid = playerBoard.getBoard();

  // Get DOM representation of the grid
  const domGrid = document.querySelector(
    '#player-board > .board-grid'
  ) as HTMLDivElement;
  // console.log(domGrid);
  // console.log(domGrid.childNodes);
  // console.log(domGrid.children);
  const tileList = [...domGrid.childNodes];

  tileGrid.forEach((col) => {
    col.forEach((tile) => {
      // If tile has ship, color it
      if (tile.getShipIndex() !== null) {
        const x = tile.coords.x;
        const y = tile.coords.y;
        console.log(x, y);

        const currentTile = tileList.find((element) => {
          if (!(element instanceof HTMLElement)) return undefined;
          // console.log(element.dataset.xCoord);

          if (
            element.dataset.xCoord === x.toString() &&
            element.dataset.yCoord === y.toString()
          ) {
            return element;
          }
        });

        if (currentTile instanceof HTMLDivElement) {
          currentTile.textContent = 'S';
          currentTile.classList.add('has-ship');
        }
      }
    });
  });
}

export { newGame };
