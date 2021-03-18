var myLion = {
  name: "Simba",
  legs: 4,
  tails: 1,
  roar: "roar-roar"
};
var obj = myFunction("roar");

function myFunction(Name) {
  delete myLion[Name];
  return myLion;
}
console.log(obj);
myFunction("roar");
module.exports = myFunction;
