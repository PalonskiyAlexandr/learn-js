function f(x) {
  console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 10000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

function delay(func, time) {
  return function (...args) {
    setTimeout(() => func.apply(this, args), time);
    // setTimeout(() => clearInterval(timerId), 10000);
  };
}
