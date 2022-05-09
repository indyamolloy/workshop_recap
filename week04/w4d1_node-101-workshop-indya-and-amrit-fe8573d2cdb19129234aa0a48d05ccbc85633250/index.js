import myCollection from "./collection.js";
import chalk from "chalk";

function describeItem(item) {
  const nameitem = chalk.cyan(myCollection[item].name);
  const count = chalk.yellow(myCollection[item].count);
  const whatlike = chalk.green(myCollection[item].name);

  if (myCollection[item].count === 1) {
    console.log(`I have a ${nameitem}.Here's what I like about it:  ${count}`);
  } else {
    console.log(
      `I have ${count} ${nameitem}'s. Here's what I like about them: ${whatlike}`
    );
  }
}

function describeCollection(array) {
  for (let item in array) {
    describeItem(item);
  }
}

console.log(describeCollection(myCollection));
