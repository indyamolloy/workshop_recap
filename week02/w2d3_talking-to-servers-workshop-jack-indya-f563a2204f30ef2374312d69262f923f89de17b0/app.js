console.log("It's Kanye time...");

async function getQuote() {
  const response = await fetch("https://api.kanye.rest/");
  const data = await response.json();
  console.log(data.quote);
  const h1 = document.querySelector("#kanye-quote");
  h1.innerText = data.quote;
  quoteHistory(data.quote);
}

getQuote();

//add event to button click
const button = document.querySelector("#new-quote-button");

button.addEventListener("click", getQuote);

//Save quotes to history
function quoteHistory(quote) {
  const listItem = document.createElement("li");
  listItem.innerText = quote;

  const list = document.querySelector("#kanye-quote-history");

  list.appendChild(listItem);
}
