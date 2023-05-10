function getMaxSubSum(arr) {
  let maxSum = 0;
  let partrialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partrialSum += arr[i];
    if (partrialSum>maxSum){
      maxSum = partrialSum;
    }
    if (partrialSum<0){
      partrialSum = 0;
    }
  }
  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
