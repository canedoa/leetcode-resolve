// Dado un array ordenado de enteros distintos y un
// valor objetivo, devuelve el índice si se encuentra
// el objetivo. En caso contrario, devuelve el índice donde
// estaría si se insertara en orden.

// Debe escribir un algoritmo con una complejidad de
// ejecución de O(log n).

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

const nums = [1, 3, 5, 6];
const target = 5;

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length; //en caso de no encontrar el target devuelve la cantidad de indice
}
console.log(searchInsert(nums, target));
