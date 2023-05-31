let handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, val, receiver) {
      target[handlers].forEach((handler) => {
        handler(prop, val);
      });
      return Reflect.set(target, prop, val, receiver);
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
