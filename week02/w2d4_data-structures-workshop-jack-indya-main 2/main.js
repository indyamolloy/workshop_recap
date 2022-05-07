const trolley = [
  {
    id: "frt1",
    quantity: 4,
  },
  {
    id: "ml1",
    quantity: 2,
  },
  {
    id: "ml2",
    quantity: 1,
  },
  {
    id: "chc1",
    quantity: 1,
  },
  {
    id: "drk1",
    quantity: 12,
  },
  {
    id: "drk2",
    quantity: 4,
  },
  {
    id: "frt2",
    quantity: 10,
  },
  {
    id: "msc1",
    quantity: 5,
  },
  {
    id: "ele1",
    quantity: 3,
  },
  {
    id: "pen1",
    quantity: 4,
  },
];

const inventory = [
  {
    id: "frt1",
    name: "Apple",
    isHealthy: true,
    recalled: false,
    price: 1,
  },
  {
    id: "chc1",
    name: "Large Chocolate bar",
    isHealthy: false,
    recalled: false,
    price: 3,
  },
  {
    id: "ml1",
    name: "Pasta Salad Meal",
    isHealthy: true,
    recalled: false,
    price: 4,
  },
  {
    id: "frt2",
    name: "Large Banana",
    isHealthy: true,
    recalled: true,
    price: 2,
  },
  {
    id: "ml2",
    name: "Chicken Sandwich Meal",
    isHealthy: true,
    recalled: false,
    price: 3,
  },
  {
    id: "drk1",
    name: "Red Bull Energy Drink",
    isHealthy: false,
    recalled: true,
    price: 4,
  },
  {
    id: "pen1",
    name: "A Pack Of Pens",
    isHealthy: true,
    recalled: false,
    price: 3,
  },
  {
    id: "drk2",
    name: "Orange Juice",
    isHealthy: false,
    recalled: true,
    price: 2,
  },
  {
    id: "msc1",
    name: "Pack Of Paper",
    isHealthy: true,
    recalled: false,
    price: 2,
  },
  {
    id: "drk3",
    name: "Bottled Water",
    isHealthy: true,
    recalled: true,
    price: 3,
  },
  {
    id: "ele1",
    name: "Laptop Computer",
    isHealthy: true,
    recalled: false,
    price: 300,
  },
  {
    id: "nut1",
    name: "Pack of Salted Peanuts",
    isHealthy: true,
    recalled: true,
    price: 1,
  },
  {
    id: "nut2",
    name: "Pack of Mixed Nuts",
    isHealthy: true,
    recalled: false,
    price: 2,
  },
  {
    id: "hdc1",
    name: "Large Latte",
    isHealthy: false,
    recalled: false,
    price: 4,
  },
  {
    id: "hdc2",
    name: "Large Skinny Cappucino",
    isHealthy: true,
    recalled: false,
    price: 4,
  },
];

const receipt = [];

//filter out items that aren't healty
const healthyInv = inventory.filter(function (item) {
  return item.isHealthy !== false;
});

//remove unhealthy items from trolley

const healthyTrolley = trolley.filter(function (item) {
  for (let i = 0; i < healthyInv.length; i++) {
    let items = [];
    if (healthyInv[i].id === item.id) {
      items.push(item);
      return items;
    }
  }
});

//remove items from trolley that are recalled
const removeRecalledTrolley = trolley.filter(function (item) {
  for (let i = 0; i < inventory.length; i++) {
    let items = [];
    if (inventory[i].id === item.id && inventory[i].recalled === false) {
      items.push(item);
      return items;
    }
  }
});

//create a receipt for customer

const receiptArray = trolley.map(function (item) {
  let itemObj = {};
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === item.id) {
      itemObj.name = inventory[i].name;
      itemObj.quantity = item.quantity;
      itemObj.totalPrice = inventory[i].price * item.quantity;
      console.log(itemObj);
    }
  }
  return itemObj;
});
