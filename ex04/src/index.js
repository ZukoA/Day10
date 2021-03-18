var player = {
  7: "Muhamed Besic",
  10: "Miralem Pjanic",
  11: "Edin Dzeko"
};
function bracketsNotation(myObj) {
  var playerNumber = "10";
  var myBestplayer = myObj[playerNumber];
  return myBestplayer;
}
console.log(bracketsNotation(player));
module.exports = { player, bracketsNotation };
