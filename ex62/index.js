// Setup
function compareEquality(a, b) {
    if (a ===b) {
        return "Equal";
    }

    return "Not Equal";
}

compareEquality(10, "10");

/*Neste caso, o valor que será retornado vai ser Not Equal
por que o operador === serve para comparar o valor e se o que foi digitado
é número, string, Como 10 é um número e "10" é uma string
o resultado vai ser false  */