function createPromise(status) {
  var promise = new Promise(function (resolve, reject) {
    if (status) {
      resolve({
        ok: true,
        data: {
          name: "Raj sinha",
          city: "Delhi",
        },
      });
    } else {
      reject({
        ok: false,
        data: "Error while accessing the data",
      });
    }
  });

  return promise;
}

var promiseObj = createPromise(false);

promiseObj
  .then(function (res) {
    console.log("Resolved", res);
  })
  .catch(function (error) {
    console.log("Error", error);
  });
