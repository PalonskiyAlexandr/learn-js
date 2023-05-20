function changeMidle(mass) {
  let midle = Math.floor(mass.length / 2);
  mass[midle] = "Классика";
  return mass;
}

function addBegining(editMas, addMas) {
  let mas = addMas.concat(editMas);
  return addMas.concat(editMas);
}

let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles = changeMidle(styles);
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles = addBegining(styles, ["Рэп", "Рэгги"]);
console.log(styles);
