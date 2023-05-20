let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = getNames(users);

console.log( names ); // Вася, Петя, Маша

function getNames(objMas){
  return objMas.map(item => item.name);
}