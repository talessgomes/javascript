// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i);//11

/*dentro de do, myArray.push vai mostrar que o valor
da variável i é igual a 10, mas vai somar o 10 com o i++,
 logo, o valor mostrado na variável i será 11.
 Whila vai ser false, pois 10 é maior do que 5*/