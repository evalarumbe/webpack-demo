export default function(petsTemplate) {
  async function getPets() {
    const response = await fetch('https://learnwebcode.github.io/json-example/pets-data.json');
    const data = await response.json();
    return data;
  }

  getPets().then(data => { console.log('WOW', data); return data}).then(petsTemplate);
}
