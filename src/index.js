import _ from 'lodash';

// styles
import './styles.css';

function component() {
  const element = document.createElement('div');
  
  const button = document.createElement('button');
  const br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);
  
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.addEventListener('click', () => import(/* webbpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  }).catch(error => "An error ocurred while appending the component"));

  return element;
}

document.body.appendChild(component());
