// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const answer = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return answer;
}

function nameToAttributes(drivers) {
  const answer = drivers.map(function(name) {
    const split = name.split(" ");
    return Object.assign({}, {firstName: split[0], lastName: split[1]});
  })
  return answer;
}

function attributesToPhrase(drivers) {
  const answer = drivers.map(function(object) {
    return `${object.name} is from ${object.hometown}`;
  })
  return answer;
}
