let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

//add cathorse to back of array
queue.push("catHorse");

//remove animal from front of queue
queue.shift();

//add owlDonkey to front of queue
queue.unshift("owlDonkey");

//remove catHorse from back of queue
queue.pop();

//remove kangarooBear from queue;
queue.splice(4, 1);

//add new array to old array
const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];
const newQueue = queue.concat(unofficialQueue);

//using spread operator
const queueAdded = [...queue, ...newQueue];
