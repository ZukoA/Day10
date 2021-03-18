var myPet = {
  species: "Cat",
  name: "Ara",
  legs: 4,
  friends: "Four friends",
};
function myFunction(obj) {
  return obj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
