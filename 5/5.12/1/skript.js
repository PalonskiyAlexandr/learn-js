let user = {
  name: "Василий Иванович",
  age: 35,
};

let str = JSON.stringify(user);
console.log(str);

str = JSON.parse(str);
console.log(str);
