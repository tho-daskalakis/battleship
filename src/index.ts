import './index.scss';

console.log('hello!');

const h1 = document.createElement('h1');
h1.textContent = 'Hello Battleship!';

const app = document.getElementById('app') as HTMLDivElement;
app.appendChild(h1);
