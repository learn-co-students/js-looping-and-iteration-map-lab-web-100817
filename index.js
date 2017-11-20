// Code your solution in this file.
function lowerCaseDrivers(ar) {
  return ar.map(function(d){return d.toLowerCase()});
}

function nameToAttributes(ar) {
  return ar.map(function(n){return Object.assign({firstName: n.split(' ')[0], lastName: n.split(' ')[1]})})
}

function attributesToPhrase(ar){
  return ar.map(function(d){
    return `${d.name} is from ${d.hometown}`})
}
