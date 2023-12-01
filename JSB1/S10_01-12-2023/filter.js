var data = [20, 30, 99, 66, 78, 31, 91, 12, 11];

var filteredData = data.filter(function (element, index) {
  console.log(index);
  return element < 50;
});
