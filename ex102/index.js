function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    console.log(product); //5040
  // Only change code above this line
    return product;
}

multiplyAll([1, 2], [3, 4], [5, 6, 7]);

/*Neste exercício, eu vou pegar a lista que é gerada 
pelo for, e vou multiplicar o i e o j, multiplicando um por um
o resultado vai ser 5040*/