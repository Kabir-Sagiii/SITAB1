function performOperation(x, y, action) {
  if (action === "+") {
    console.log(x + y);
  }

  if (action === "-") {
    console.log(x - y);
  }
  if (action === "*") {
    console.log(x * y);
  }

  if (action === "/") {
    console.log(x / y);
  }
}

performOperation(20, 10, "+");
