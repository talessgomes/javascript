// Setup
function testStrict(val) {
    if(val === 7) {
        console.log("Equal");
        return "Equal";
    }
    console.log("Not Equal");
    return "Not Equal";
}

testStrict(10);

/*Como 7 não é igual ao valor da função que é 10
O valor que vai aparecer no console é Not Equal
*/