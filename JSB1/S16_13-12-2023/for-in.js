var info = {
  id: 101,
  name: "Riya Verma",
  city: "Pune",
  gender: "female",
};

for (var props in info) {
  console.log(props, ":", info[props]);
}
