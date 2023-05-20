console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

// function sumTo(n){
//   let sum = 0;
//   for (let i = n; i > 0; i--) {
//     sum+=i;
//   }
//   return sum;
// }

// function sumTo(n) {
//   if (n == 0) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

function sumTo(n) {
  if (n == 0) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}
