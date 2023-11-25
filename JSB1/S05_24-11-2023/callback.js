function f1() {
  console.log("f1 is called");
}

function f2(f) {
  console.log(f);
  f();
}

f2(f1);

function fn(x) {
  x();

  x();

  x();
}

fn(function () {
  console.log("i am callback function");
});
