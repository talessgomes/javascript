// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater";
    // Only change code above this line
    console.log("dentro da função " + outerWear); //sweater
    return outerWear;
}

console.log("Fora da função " + outerWear); //T-Shirt
myOutfit(); //pegando o valor da função