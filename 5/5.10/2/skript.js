let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));

function topSalary(salaries){
  let max = 0;
  let emploee = "";
  for(let [name, salariy] of Object.entries(salaries)){
    if (salariy > max){
      emploee = name;
      max = salariy;
    }
  }
  return `${emploee} ${max}`
}