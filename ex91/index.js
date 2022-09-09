// Setup
function phoneticLookup(val){
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
    /*Passando lookup para a variável result
  com o parâmetro, onde ele vai poder ser escolhido 
  quando eu for chamar a função */
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

console.log(phoneticLookup("charlie"));