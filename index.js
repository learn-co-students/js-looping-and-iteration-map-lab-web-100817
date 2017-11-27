// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function (element) { return element.toLowerCase()})
}

function nameToAttributes(array){
  return array.map(function (element) {
    let split = element.split(" ")
    return Object.assign({}, name, {firstName: split[0], lastName: split[1]})
  })
}

function attributesToPhrase(array){
  return array.map(function (element){
    return `${element.name} is from ${element.hometown}`
  })
}
