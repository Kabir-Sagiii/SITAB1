var promise = new Promise(function (resolve, reject) {
  reject({
    ok: false,
    data: "Failed To access data from database",
  });
});

// console.log(promise);

promise
  .then(function (res) {})
  .catch(function (reject) {
    console.log(error);
  });
