export const getPets = async function() {
  const response = await fetch('https://learnwebcode.github.io/json-example/pets-data.json');
  const data = await response.json();
  const pets = await data.pets;
  return pets;
}
