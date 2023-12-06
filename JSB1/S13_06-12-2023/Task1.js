var data = [
  {
    id: 101,
    name: "Iphone 15",
    price: 130000,
  },
  {
    id: 102,
    name: "Galaxy Ultra 23",
    price: 125000,
  },
  {
    id: 103,
    name: "Vivo 27 Pro",
    price: 38000,
  },
  {
    id: 104,
    name: "Iphone 14",
    price: 70000,
  },
  {
    id: 105,
    name: "oneplus 12",
    price: 50000,
  },
  {
    id: 106,
    name: "oppo",
    price: 20000,
  },
];

//Print all those Product information in the console whose price is more then 70000

// data.forEach(function (ele) {
//   //ele = {price:""}

//   ele.price > 70000 ? console.log(ele) : null;
// });

//print all those objects whose price is in between 30000 to 100000
data.forEach(function (ele) {
  //ele = {price:""}

  ele.price > 30000 && ele.price < 100000 ? console.log(ele) : null;
});
