function checkSing(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}

checkSign(10); //positive
console.log(checkSign(0)); //zero
console.log(checkSign(-1)); //negative


/* 
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
*/

/* 
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
*/