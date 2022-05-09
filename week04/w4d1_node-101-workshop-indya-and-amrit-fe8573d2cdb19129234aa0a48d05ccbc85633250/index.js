import myCollection from "./collection.js";

function describeItem(item) {
  if (myCollection[item].count === 1) {
    console.log(
      `I have a ${myCollection[item].name}.Here's what I like about it:  ${myCollection[item].whatILike}`
    );
  } else {
    console.log(
      `I have ${myCollection[item].count} ${myCollection[item].name}'s. Here's what I like about them: ${myCollection[item].whatILike}`
    );
  }
}

function describeCollection(array) {
  for (let item in array) {
    describeItem(item);
  }
}

console.log(describeCollection(myCollection));
