// function operation(x, y, ops) {
//   var a = x;

//   var b = y;

//   ops === "add" ? console.log(a + b) : console.log(a - b);
// }
function operation(x, y, ops) {
  var a = x;

  var b = y;

  if (ops === "add") {
    var result = a + b;
    console.log(result);
  }

  if (ops === "sub") {
    var result = a - b;
    console.log(result);
  }
}

operation(10, 20, "sub"); //addition
