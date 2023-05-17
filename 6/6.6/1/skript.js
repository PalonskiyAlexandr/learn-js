function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.decrease = function () {
    return count--;
  };

  counter.set = function (value) {
    count = value;
    return count;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter.set(5));
console.log(counter.decrease());
console.log(counter()); // 0
