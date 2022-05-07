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
    }
  }
  return itemObj;
});

// The store has an offer on! If you buy 3 or more items that are the same, you can get 25% off! Build a function to do that from the above receipt. Add a discount to all elements, calculating the correct discount.

function addDiscount(array) {
  array.map(function (item) {
    if (item.quantity >= 3) {
      const discount = (item.totalPrice * 25) / 100;
      item.totalPriceAfterDiscount = item.totalPrice - discount;
    }
  });
}
const discountedReceipt = addDiscount(receiptArray);

// Bonus Task: Show Receipt
// You now have the opportunity to show the receipt on screen. from the receipt built by the above tasks, please show this on the DOM (which, if you remember, is the model the browser has for what appears on screen). Think about how this might need to be styled.

//calc total before the discount
const totalArray = receiptArray.map(function (item) {
  return item.totalPrice;
});

const totalPrice = totalArray.reduce((prev, acc) => {
  return prev + acc;
});

//calc discount total

const totalDiscountArray = receiptArray.map(function (item) {
  if (item.totalPriceAfterDiscount === undefined) {
    return 0;
  } else {
    return item.totalPriceAfterDiscount;
  }
});

const totalDiscountPrice = totalDiscountArray.reduce((prev, acc) => {
  return prev + acc;
});

document.querySelector(".full-total").innerText = totalPrice;

document.querySelector(".discount-total").innerText =
  totalPrice - totalDiscountPrice;

document.querySelector(".price-paid").innerText = totalDiscountPrice;
