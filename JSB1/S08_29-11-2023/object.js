var data = {
  id: 101,
  product: "Iphone 15",
  price: 100000,
  qty: 3,
  totalAmount: function () {
    console.log("Total Amount :", data.price * data.qty);
  },
};

//ObjectName.KeyName()

data.totalAmount();

console.log();
