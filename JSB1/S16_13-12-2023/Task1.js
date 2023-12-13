//Print all the even numbers from 1 to 20

function printEven(initialvalue, num) {
  for (var a = initialvalue + 1; a < num; a++) {
    if (a % 2 === 0) {
      console.log(a);
    }
  }
}

printEven(70, 90); //   print even number which comes in between 70 and 90
