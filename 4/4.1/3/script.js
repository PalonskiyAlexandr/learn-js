let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
alert(getSum(salaries));

function getSum(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
