function calc(x, y, operator) {
  switch (operator) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
      break;
    case "/":
      console.log(x / y);
      break;
    default:
      console.log("Pass valid Operator");
  }
}

calc(10, 20, "+");
