function camelize(str) {
  return str
    .split("-")
    .map((element, index) =>
      index == 0 ? element : element[0].toUpperCase() + element.slice(1)
    )
    .join("");
}

console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == "listStyleImage");
console.log(camelize("-webkit-transition") == "WebkitTransition");
