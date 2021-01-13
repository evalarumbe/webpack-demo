// styles
import './styles.css';

async function getComponent() {
  const{ default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash'); // TODO: this destructuring syntax means what?
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
}).catch(error => "An error ocurred while appending the component");
