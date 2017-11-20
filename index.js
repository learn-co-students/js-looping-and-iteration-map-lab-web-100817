// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(function(name) { return name.toLowerCase() });
}

function nameToAttributes(array) {
  return array.map(function(name) {
    let splitName = name.split(" ");
    return { firstName: splitName[0], lastName: splitName[1] };
  })
}

function attributesToPhrase(array) {
  return array.map(function(obj) {
    return `${obj.name} is from ${obj.hometown}`;
  })
}
