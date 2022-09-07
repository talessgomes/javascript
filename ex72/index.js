function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        return "5 or Smaller";
    }
    // Only change code above this line
    console.log(result);
    return result;
}

testElse(4);

/*Como 4 é menor do que 5,
o resultado vai ser o retorno do else */