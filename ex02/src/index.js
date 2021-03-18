var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};
function dotNotition(myClothes) {
    var hatvalue = myClothes.hat;
    var shirtvalue = myClothes.shirt;
    var shoesvalue = myClothes.shoes;
    return {
        hatvalue, shirtvalue, shoesvalue
    };
}
console.log(dotNotition(myClothes));
module.exports = { dotNotition, myClothes };