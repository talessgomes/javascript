function convertToInteger(str) {

    const convert = parseInt(str);

    return convert;
};

convertToInteger("56");
convertToInteger("77")
convertToInteger("JamesBond")

console.log(convertToInteger("56")); //56
console.log(convertToInteger("77")); //77
console.log(convertToInteger("JamesBond")); //NaN


/*Nesta função eu vou usar parseInt, onde ele vai fazer com que
a string tenha um retorno de um number */
