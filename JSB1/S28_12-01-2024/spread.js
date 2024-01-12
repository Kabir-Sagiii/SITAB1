var obj1 = {
  name: "Raj",
  gender: "male",
  id: 101,
};

var obj2 = {
  ...obj1,
  city: "hyderabad",
  name: "Rohan",
};

// console.log(obj1);
// console.log("----------------------------");
// console.log(obj2);

var arr1 = [100, 200, 300, 400];

var arr2 = [...arr1, 500, 600];

console.log(arr1);
console.log("----------------------------");
console.log(arr2);
