// function showProducts() {
//   var listItem1 = document.getElementById("l1");
//   var listItem2 = document.getElementById("l2");
//   var listItem3 = document.getElementById("l3");
//   var listItem4 = document.getElementById("l4");
//   var h2Ref = document.getElementById("title");

//   h2Ref.innerText = "List of Products";
//   listItem1.innerText = "Iphone 15";
//   listItem2.innerText = "Galaxy S23 Ultra";
//   listItem3.innerText = "Macbook Pro";
//   listItem4.innerText = "Trimmer";
// }

// function showTechnologies() {
//   var listItem1 = document.getElementById("l1");
//   var listItem2 = document.getElementById("l2");
//   var listItem3 = document.getElementById("l3");
//   var listItem4 = document.getElementById("l4");
//   var h2Ref = document.getElementById("title");

//   h2Ref.innerText = "List of Technologies";

//   listItem1.innerText = "HTML";
//   listItem2.innerText = "CSS";
//   listItem3.innerText = "JS";
//   listItem4.innerText = "REACT";
// }

// function changeContent(title, list1, list2, list3, list4) {
//   var listItem1 = document.getElementById("l1");
//   var listItem2 = document.getElementById("l2");
//   var listItem3 = document.getElementById("l3");
//   var listItem4 = document.getElementById("l4");
//   var h2Ref = document.getElementById("title");

//   h2Ref.innerText = title;

//   listItem1.innerText = list1;
//   listItem2.innerText = list2;
//   listItem3.innerText = list3;
//   listItem4.innerText = list4;
// }

function changeContent(title) {
  var listItem1 = document.getElementById("l1");
  var listItem2 = document.getElementById("l2");
  var listItem3 = document.getElementById("l3");
  var listItem4 = document.getElementById("l4");
  var h2Ref = document.getElementById("title");

  if (title === "products") {
    h2Ref.innerText = "List of Products";
    listItem1.innerText = "Iphone 15";
    listItem2.innerText = "Galaxy S23 Ultra";
    listItem3.innerText = "Macbook Pro";
    listItem4.innerText = "Trimmer";
  } else {
    h2Ref.innerText = "List of Technologies";
    listItem1.innerText = "HTML";
    listItem2.innerText = "CSS";
    listItem3.innerText = "JS";
    listItem4.innerText = "REACT";
  }
}
