// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(function (driverName) {
    return driverName.toLowerCase()
  })
}

function nameToAttributes (collection) {
  return collection.map(function(fullName){
    return {firstName: fullName.split(' ')[0], lastName: fullName.split(' ')[1]}
  })
}

function attributesToPhrase(collection) {
  return collection.map(function (personObj) {
    return personObj.name + ' is from ' + personObj.hometown
  })
}
