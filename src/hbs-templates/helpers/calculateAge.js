module.exports = function(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  // const age = 2016 - birthYear; // uncomment to test 'less than a year old'
  return age || 'less than a year old';
}