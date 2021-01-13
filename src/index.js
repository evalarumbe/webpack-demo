// external
import _ from 'lodash'; // we're about to do this dynamically instead

// styles
import './styles.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
