function unique(arr) {
  let uniqueMas = [];
  arr.forEach((element) => {
    if (!uniqueMas.includes(element)) {
      uniqueMas.push(element);
    }
  });
  return uniqueMas;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
