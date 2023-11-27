var info = {
  name: "Sid Verma",
  city: "Pune", // mumbai
  email: "sid@gmail.com",
  gender: "male",
};

//How to Access Specific Property value and print in the terminal
//<ObjectName>.<KeyName>

var cityname = info.city;
// console.log(cityname);

// console.log(info.email);

//How to insert new Property inside the Object Programtically
// <object-name>.<key-name> = <value>
// console.log(info);
info.id = 101;
info.age = 32;
console.log(info);

//Updating Property value
// <objectName>.<Existing KeyName> = <Updated Value>

info.city = "Mumbai";
info.name = "Sagar";

console.log(info);

info.email = "sagar@gmail.com"; //

//Deleting the Property
// delete <object-name>.<key-name>
delete info.gender;

console.log(info);
