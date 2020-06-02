import { cube } from './math.js';
// we're not importing square from math.js so it's dead code that should be shook

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
