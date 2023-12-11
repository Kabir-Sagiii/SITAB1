function performOperation(x, y, action) {
  if (action === "+") {
    console.log(x + y);
  } else if (action === "-") {
    console.log(x - y);
  } else if (action === "*") {
    console.log(x * y);
  } else if (action === "/") {
    console.log(x / y);
  } else {
    console.log("Pass Valid Action like + or - or * or /");
  }
}

performOperation(20, 10, "-");
