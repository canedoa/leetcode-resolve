//Si quiero comparar en un arreglo si hay duplicados y guardarlos

let nums = [2, 1, 3, 1, 1, 4, 5];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      duplicados.push(nums[i]);
    }
  }
}

//Si solo quiero mostrar true o false de que hay o no duplicados
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true; // encontramos duplicado
      }
    }
  }
  return false; // si nadie se repitió
}

console.log(hasDuplicate([2, 1, 3, 1, 1, 4, 5])); // true
console.log(hasDuplicate([1, 2, 3, 4])); // false

//Con hasmap

function hasDuplicate(nums) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen[num]) {
      return true;
    }

    seen[num] = true;
  }

  return false;
}
