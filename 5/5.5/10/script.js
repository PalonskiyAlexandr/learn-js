let arr = [1, 2, 3];

arr.sort(shuffle);
console.log(arr);


function shuffle() {
  let max = 1;
  let min = -1;
  let rnd = Math.floor(Math.random() * (max - min)) + min;
  console.log(rnd);
  return rnd;
}
