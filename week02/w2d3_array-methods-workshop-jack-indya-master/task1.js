const cats = ["tony", "daisy", "socks", "rockie"];

const capitalisedCats = toUpperCaseCats();

function toUpperCaseCats() {
  let arr = [];
  for (let i = 0; i < cats.length; i++) {
    const upperCaseCat = cats[i].toUpperCase();
    arr.push(upperCaseCat);
  }
  return arr;
}
