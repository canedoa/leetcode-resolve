// function twoSum(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
// }

// // Prueba
// const resultado = twoSum([2, 7, 11, 15], 9);
// console.log("Resultado:", resultado); // [0, 1]

//Funcion menos eficiente pero llegamos al mismo resultado
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(nums, target));
