function moveZeros(nums) {
  let pos = 0; // en esta posicion pondre el numero que no es cero

  // 1Mover los números no-cero al inicio
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // Llenar el resto con ceros
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}
console.log(moveZeros([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeros([1, 0, 2, 0, 3])); // [1,2,3,0,0]
