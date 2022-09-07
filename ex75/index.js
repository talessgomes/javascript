function testSize(num) {
   // Only change code below this line
   if (num < 5) {
    console.log("Tiny");
    return "Tiny";
   } else if (num < 10) {
    console.log("Small");
    return "Small";
   } else if (num < 15) {
    console.log("Medium");
    return "Medium";
   } else if ( num < 20) {
    console.log("Large");
    return "Large"
   } else {
    console.log("Huge");
    return "Huge";
   }

   // Only change code above this line
}

testSize(7);

/*O Resultado vai ser Small */