import { computerFactory } from '../model/player/computerAI/computerAI';
import { playerFactory } from '../model/player/player';
import { createMainPage } from '../view/mainPage';

const players = [playerFactory('Player'), computerFactory('Computer')];

function newGame() {
  clearApp();
  createMainPage();

  // For testing
  placeShipsToDefaultPositions();
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

export { newGame };
