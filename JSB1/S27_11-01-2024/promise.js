function crPromise() {
  return new Promise(function (resolve, reject) {
    resolve({
      data: [{ name: "N1" }, { name: "N2" }],
    });
  });
}

// var promise = crPromise();

// promise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (error) {});

// crPromise()
//   .then(function (r) {
//     console.log(r);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });

function handlePromise() {
  crPromise()
    .then(function (r) {
      console.log(r);
    })
    .catch(function (e) {
      console.log(e);
    });
}

handlePromise();
