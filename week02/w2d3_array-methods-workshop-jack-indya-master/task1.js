const cats = ["tony", "daisy", "socks", "rockie"];

//as a function
function toUpperCaseCats() {
  let arr = [];
  for (let i = 0; i < cats.length; i++) {
    const upperCaseCat = cats[i].toUpperCase();
    arr.push(upperCaseCat);
  }
  return arr;
}

//using map

const capitalisedCats = cats.map((cat) => cat.toUpperCase());
