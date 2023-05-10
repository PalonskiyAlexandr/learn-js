let arr = ['les', 'sel', 'pel', 'lep', 'epl', 'ple', 'pel', 'esl'];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let clearmas = [];
  clearmas.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (clearmas.every(element => convert(element)!=convert(arr[i]))) {
      clearmas.push(arr[i]);
    }
  }
  return clearmas;
}

function convert(str) {
  if (str == undefined){
    return;
  }
  return str.toLowerCase().split("").sort().join();
}
