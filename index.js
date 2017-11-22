// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map((driver) => {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map((driver) => {
    let arr = driver.split(" ");
    return { firstName: arr[0], lastName: arr[1] };
  })
}

function attributesToPhrase(drivers) {
  return drivers.map((driver) => {
    return `${driver.name} is from ${driver.hometown}`;
  })
}