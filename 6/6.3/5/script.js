function inBetween(a, b) {
  return function(x,y) {
    console.log(y);
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x,y) {
    console.log(y);
    return arr.includes(x);
  };
}


let arr = [3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2