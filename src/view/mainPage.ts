import { createBoardDisplay } from './mainPageElements/board';
import { createInfoDisplay } from './mainPageElements/infoDisplay';
import { createTitle } from './mainPageElements/title';

function createMainPage(): void {
  // Get root element
  const app = document.getElementById('app') as HTMLDivElement;

  app.classList.add('page-layout');

  app.appendChild(createTitle());
  app.appendChild(createInfoDisplay());
  app.appendChild(createBoardDisplay());
}

export { createMainPage };
