// function printNumbers(from, to) {
//   let timeId = setInterval(() => {
//     if (from >= to) {
//       clearInterval(timeId);
//     }
//     console.log(from);
//     from++;
//   }, 1000);
// }

printNumbers(1, 3);

function printNumbers(from, to) {
  setTimeout(function time() {
    if (from < to) {
      setTimeout(time, 1000);
    }
    console.log(from);
    from++;
  }, 1000);
}
