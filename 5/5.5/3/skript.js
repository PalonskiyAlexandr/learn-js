function filterRangeInPlace(arr, a, b) {
  let filtredMass = {};
  filtredMass.push('американский футбол', 'плавание');
  console.log(filtredMass);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      console.log(arr[i]);
      filtredMass.push(arr[i]);
    }
  }
  arr.splice(0, arr.length - 1, filtredMass);
  console.log(arr);
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]
