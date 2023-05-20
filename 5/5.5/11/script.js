let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

let puk = getAverageAge(arr);
console.log(getAverageAge(arr));

function getAverageAge(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element.age));
  return sum / arr.length;
}
