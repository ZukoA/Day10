var myLion = {
  name: "Simba",
  legs: 4,
  tails: 1,
  roar: "roar-roar",
};
var obj = myFunction("roar-roar");

function myFunction(propName, propValue) {
  myLion[propName] = propValue;
  return myLion;
}
console.log(obj);
myFunction("roar-roar");
module.exports = myFunction;
