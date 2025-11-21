function sumExceptExtremes(nums) {
  if (nums.length <= 1) return 0; //Si el arreglo tiene 0 o 1 elemento, no hay nada “en medio” para sumar

  // Encontrar el menor
  let menor = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < menor) {
      menor = nums[i];
    }
  }

  // Encontrar el mayor
  let mayor = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > mayor) {
      mayor = nums[i];
    }
  }

  // Sumar EXCEPTO menor y mayor
  let result = 0;
  for (let num of nums) {
    if (num === menor || num === mayor) {
      continue;
    }
    result += num;
  }

  return result;
}
