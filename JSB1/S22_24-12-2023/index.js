function createTable() {
  var username = document.getElementById("username").value;
  var city = document.getElementById("city").value;
  var radios = document.getElementsByName("gender");
  var gender;

  if (radios[0].checked) {
    gender = "male";
  } else if (radios[1].checked) {
    gender = "female";
  } else {
    gender = "other";
  }

  //   console.log(username, city, gender);

  var table = document.createElement("table"); // <table><tr>  </tr> </table>

  var tr1 = document.createElement("tr"); //<tr>  </tr>
  var tr2 = document.createElement("tr");
  var th1 = document.createElement("th"); //<th></th>
  var th2 = document.createElement("th"); // <th> </th>
  var th3 = document.createElement("th"); //th> </th>

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  td1.innerText = username;
  td2.innerText = city;
  td3.innerText = gender;

  th1.innerText = "NAME";
  th2.innerText = "CITY";
  th3.innerText = "GENDER";

  tr1.appendChild(th1); //<tr><th></th></tr>
  tr1.appendChild(th2); //<tr><th></th><th></th></tr>
  tr1.appendChild(th3);

  tr2.appendChild(td1);
  tr2.appendChild(td2);
  tr2.appendChild(td3);

  table.appendChild(tr1); //<table><tr><th></th><th></th></tr></table>
  table.appendChild(tr2);

  table.style.width = "300px";
  table.style.border = "2px solid red";
  table.style.margin = "30px auto";

  var container = document.getElementsByClassName("container");
  container[0].appendChild(table);
}

function f1() {
  alert("hello");
}
