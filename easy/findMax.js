function findMax(nums) {
  let max = nums[0]; // el primer número es el mayor por ahora

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

console.log(findMax([1, 4, -5, 3])); // 4
