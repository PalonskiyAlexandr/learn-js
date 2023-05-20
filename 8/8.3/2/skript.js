function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function (time) {
  let f = this;
  return function (...args){
    setTimeout(() => f.apply(this, args), time);
  }
};

f.defer(1000)(1, 2);
