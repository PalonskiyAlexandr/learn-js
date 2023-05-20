function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let splitedStr = str.split(" ");
    let a = +splitedStr[0];
    let op = splitedStr[1];
    let b = +splitedStr[2];

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
console.log(calc.calculate("1 + 2"));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("2 * 2"));
console.log(calc.calculate("2 / 2"));
console.log(calc.calculate("3 ** 2"));