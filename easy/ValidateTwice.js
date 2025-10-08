function validateTwice(nums) {
  if (nums.length <= 2) return nums.length;

  let write = 2;

  for (let i = 2; i < nums.length; i++) {
    console.log("i:", i, "nums[i]:", nums[i], "nums[write-2]:", nums[write - 2]);

    if (nums[i] !== nums[write - 2]) {
      nums[write] = nums[i];
      write++;
      console.log(" -> Guardamos en nums[" + (write - 1) + "] =", nums[write - 1]);
    }
    console.log("Estado actual:", nums);
  }

  return write;
}
let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k = validateTwice(nums);
console.log("k =", k);
console.log("nums =", nums);
