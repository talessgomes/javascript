// Setup
function testNotEqual(val) {
    if(val != 99) { // Change this line
        console.log("Not Equal");
        return "Not Equal";
    }
    console.log("Equal");
    return "Equal";
}

testNotEqual(10);

/*Neste caso, eu usei o inverso, então 99 é diferente de 10
logo é verdadeiro, resposta é Not Equal */