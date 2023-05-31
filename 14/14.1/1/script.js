let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        throw ReferenceError(`unexisting property: ${prop}`);
      }
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
