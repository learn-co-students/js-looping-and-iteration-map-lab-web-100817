// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map (function (driversName) {
    return driversName.toLowerCase()
  });
}

function nameToAttributes(drivers) {
  return drivers.map (function (driversName) {
    const driverFirst = driversName.split(' ')[0];
    const driverLast = driversName.split(' ')[1];
    driverObject = {firstName: driverFirst, lastName: driverLast}
    return driverObject;
  });
}

function attributesToPhrase(drivers) {
  return drivers.map (function (driversName){
    return `${driversName.name} is from ${driversName.hometown}`
    
  });
}
