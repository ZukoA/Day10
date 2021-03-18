var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water"
};
function bracketsNotation(myFood) {
  var vegetablevalue = myFood["vegetable"];
  var fruitvalue = myFood["fruit"];
  var drinkvalue = myFood["drink"];
  return {
    vegetablevalue,
    fruitvalue,
    drinkvalue,
  };
}
console.log(bracketsNotation(myFood));
module.exports = bracketsNotation(myFood);
