function myLocalScope() {
    // Only change code below this line
    const myVar= ""
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  
  //console.log com o myVar vai retornar um erro, 
  //pois a variável está sendo declarada dentro da função