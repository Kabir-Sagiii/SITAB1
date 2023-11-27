var data = {
  uname: "Sneha Reddy",
  gender: "female",
  isMarried: false,
  address: {
    city: "Chennai",
    state: "TN",
    code: 99999,
  },
};

console.log(data.address.city);

data.address.country = "India";
console.log(data);
