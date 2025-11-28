const nums = [1, -2, 3, 4, -1];

function sumPositive(nums) {
  let sum = 0;

  for (let num of nums) {
    if (num < 0) {
      continue;
    } else {
      sum += num;
    }
  }

  return sum;
}

console.log(sumPositive(nums));
