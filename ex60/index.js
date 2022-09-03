// Setup
function testEqual(val) {
    if(val == 12) { // Change this line
        console.log("Equal");
        return "Equal";
    }
    console.log("Not Equal");
    return "Not Equal";
}

testEqual(10);

/*Como 10 não é igual a 12, o equal não vai ser chamado */