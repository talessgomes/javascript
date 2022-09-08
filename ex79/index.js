function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    console.log(answer);

     // Only change code above this line
    return answer;
}

sequentialSizes(1);

/*Independente da escolha for de 1 a 9
o resultado vai funcionar direitinho,
 neste caso a resposta é Low */