let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  let sum = 0;
  for (let salarie of Object.values(salaries)) {
    sum += salarie;
  }
  return sum;
}
