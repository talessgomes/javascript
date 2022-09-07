function orderMyLogic(val) {
    if (val < 5) {
        console.log("Less than 5");
        return "Less than 5";
    } else if (val < 10) {
        console.log("Less than 10");
        return "Less than 10";
    } else {
        console.log("Greater than or equal to 10");
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

/*o resultado vai ser menor do que 10
já que 7 é maior do que 5 e é menor do que 10 */