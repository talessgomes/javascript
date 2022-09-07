function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        console.log("Outside");
        return "Outside";
    }

    // Only change code above this line
    console.log("Inside");
    return "Inside";
}

testLogicalOr(15);

/*A saída vai ser inside, porque 15 não é menor do que 10
e não é maior do que 20 */