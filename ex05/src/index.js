var school = {
  name: "Arena",
  location: "Sarajevo",
  established: "2020"
};
var obj = myFunction("Paragon");

function myFunction(name) {
  school.name = name;
  return school;
}
console.log(obj);
myFunction("Paragon");
module.exports = { school, myFunction };
