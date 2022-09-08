function switchOfStuff(val) {
    let answer = "";
     // Only change code below this line
     switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
            default:
                answer = "stuff";
     }

     console.log(answer);
     // Only change code above this line
  return answer;
}
switchOfStuff(1);

/*Neste caso, val vai ser 1
logo o resultado vai ser stuff */