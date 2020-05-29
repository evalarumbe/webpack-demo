import _ from 'lodash';
import './style.css';
import NyanCat from './nyan.gif';
import CsvData from './data/Toggl_summary_report_2020-05-25_2020-05-31.csv';
import XmlData from './data/data.xml';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

function image() {
  const image = document.createElement('img');

  image.setAttribute('src', NyanCat);
  image.setAttribute('alt', 'Nyan cat hurtling gleefully through space');

  return image;
}

document.body.appendChild(component());
document.body.appendChild(image());

console.log(CsvData);
console.log(XmlData);
