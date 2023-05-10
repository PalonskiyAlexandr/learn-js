function readNumber() {
  let number;
  do {
    number = prompt("Enter the number");
  } while (!isFinite(number));

  if (number === null || number === "") {
    return null;
  }
  
  return +number;
}

console.log(readNumber());
