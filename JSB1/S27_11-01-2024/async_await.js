function crPromise() {
  return new Promise(function (resolve, reject) {
    resolve({
      data: [{ name: "N1" }, { name: "N2" }],
    });
  });
}

async function handlePromise() {
  var data = await crPromise();

  console.log(data);
}

handlePromise();
