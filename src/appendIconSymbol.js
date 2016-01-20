function appendIconSymbol(id, icon, spriteId) {
  if (document.querySelector(`svg#${ spriteId }>symbol#${ id }`)) return;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.innerHTML = icon;

  const symbol = svg.firstChild;
  symbol.setAttribute('id', id);
  symbol.removeAttribute('xmlns'); // TODO: This should probably be done in the loader

  document.querySelector('svg#svg-icon-container').appendChild(symbol);
}

export default appendIconSymbol;