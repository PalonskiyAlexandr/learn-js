let calculator = {
  read() {
    this.first = +prompt("First number");
    this.second = +prompt("Second number");
  },

  sum() {
    return this.first + this.second;
  },

  mul() {
    return this.first * this.second;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
