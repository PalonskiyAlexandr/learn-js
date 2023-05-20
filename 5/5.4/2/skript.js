function getSum() {
  let sum = 0;
  do {
    let number = prompt("Введите число");
    if (number == "" || number == null || !isFinite(number)) {
      return sum;
    }
    sum += +number;
  } while (true);
}

console.log(getSum());
