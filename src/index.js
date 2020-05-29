import _ from 'lodash';
import './style.css';
import nyanCat from './nyan.gif';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

function image() {
  const image = document.createElement('img');

  image.src = nyanCat;
  image.setAttribute('alt', 'Nyan cat hurtling gleefully through space');

  return image;
}

document.body.appendChild(component());
document.body.appendChild(image());