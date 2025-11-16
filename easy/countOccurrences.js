let nums = [2, 2, 4, 3, 1, 2, 5];
const target = 2;

function countOccurrences(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    }
  }
  return count;
}
