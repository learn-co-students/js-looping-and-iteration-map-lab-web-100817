// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(driver){
    return driver.toLowerCase()
  });
};

const allDrivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];

function nameToAttributes(array){
  return array.map(function(driver){
    return {
      firstName: driver.split(' ')[0],
      lastName: driver.split(' ')[1]
    }
  });
};

const driverHash = [{ name: 'Bobby',   hometown: 'Pittsburgh'  }]

function attributesToPhrase(hash){
  return hash.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}

'Bobby is from Pittsburgh'

console.log(lowerCaseDrivers(allDrivers))
console.log(nameToAttributes(allDrivers))
console.log(attributesToPhrase(driverHash))
