// Setup
function testStrictNotEqual(val) {
    if(val !== 17) {// Change this line
        console.log("Not Equal");
        return "Not Equal";
    }
        console.log("Equal");
        return "Equal";
}

testStrictNotEqual(10);

/*Como 17 é diferente de 10, vai ser true
já que o operador quer o resultado contrário
 do que deveria ser*/