function createInfoDisplay(): HTMLParagraphElement {
  const p = document.createElement('p');

  p.id = 'info-display';
  p.textContent = 'Info display...';

  return p;
}

export { createInfoDisplay };
