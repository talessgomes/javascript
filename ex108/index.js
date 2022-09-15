function randomRange(myMin, myMax) {
    // Only change code below this line

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(2, 10));

/*Definindo que o maior número é 10
e o menor é 2, eles vão fazer a sua 
função de realizar o cálculo para
receber o valor que seja maior que o 
menor número ou menor que o maior número*/