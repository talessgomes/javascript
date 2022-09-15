function convertToInteger(str) {

    const convert = parseInt(str, 2);

    return convert;
}

convertToInteger("10011");//19

console.log(convertToInteger("10011", 2));