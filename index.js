// Code your solution in this file.

function lowerCaseDrivers(array){
  low = array.map(function(driver){
    return driver.toLowerCase();
  });
  return low;
};

function nameToAttributes(array){
  objectsarray = array.map(function(driver){
    splitdriver = driver.split(" ")
    return {'firstName': splitdriver[0],'lastName':splitdriver[1]}
  })
  return objectsarray
}

function attributesToPhrase(array){
  let stringarray = array.map(function(driver){
    let string =  driver.name + " is from " + driver.hometown
    return string
  })
  return stringarray
}
