// external
import _ from 'lodash';

// local
import printMe from './print.js';

// styles
import './styles.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.addEventListener('click', printMe, false);

  element.appendChild(btn);

  return element;
}

let elementToReload = component(); // original printMe
document.body.appendChild(elementToReload);

// Hot Module Reloader
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(elementToReload);
    elementToReload = component(); // re-render the component to use the updated printMe
    document.body.appendChild(elementToReload);
  });
}

// If HMR is working, this should only run once when we start webpack-dev-server
window.addEventListener('load', function() { console.log(`LOADED! ${new Date()}`) });
