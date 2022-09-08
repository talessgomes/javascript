// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a <= 0 || b <= 0) {
        return undefined;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a)
        + Math.sqrt(b), 2));
}

abTest(2, 2); //chamando função, vai dar 8

console.log(abTest(-2, 2)); //verificando o retorno e deu undefined

/*No momento que abTest for chamar a função
com algum número negativo, o retorno será undefined */