// external
import _ from 'lodash';

// local
import printMe from './print.js';
import pets from './pets.js';

// template
import petsTemplate from './hbs-templates/petsTemplate.hbs';

// styles
import './styles.css';

function component() {
  // Grab a template
  const element = document.createElement('div');

  console.log(pets);

  // const petsHTML = '<h2>Blorp</h2>';
  // const petsHTML = pets(petsTemplate);
  const petsHTML = pets(petsTemplate, element);

  // getPosts().then(retrievedPosts => petsTemplate(retrievedPosts));
  // or shorthand: then calls the petsTemplate callback with JSON data from getPosts 
  element.innerHTML = petsHTML;


  // Make a button
  const btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

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
