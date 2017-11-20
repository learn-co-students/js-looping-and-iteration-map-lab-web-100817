// Code your solution in this file.
function lowerCaseDrivers(array) {
  // console.log(array);
  return array.map(function (name){
    return name.toLowerCase()
  })
}

function nameToAttributes(array) {
  // console.log(array);
  return array.map(function (full_name) {
    // console.log(full_name);
    splitName = full_name.split(" ");
    // console.log(full_name.split(" "));
    return {firstName: splitName[0], lastName: splitName[1]};
  })
}

function attributesToPhrase(array) {
  // console.log(array);
  return array.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
