function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      let sumArray = rangeOfNumbers(startNum, endNum - 1);
      sumArray.push(endNum);
      return sumArray;
    }
  };
  
  console.log(rangeOfNumbers(1, 7)); //[ 1, 2, 3, 4, 5, 6, 7 ]
  console.log(rangeOfNumbers(1,5)); //[ 1, 2, 3, 4, 5 ]