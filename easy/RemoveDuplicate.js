let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let write = 0; //este es un puntero

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[write]) {
      write++; // avanzo al siguiente posicion
      nums[write] = nums[i]; // sobreescribo la posicion
      //write cambia su valor ahora a 1 y esa es la posicion a sobreescribir
    }
  }

  return write + 1; // la cantidad total de únicos
}

let k = removeDuplicates(nums);
console.log("k =", k); // 5
console.log("nums =", nums); // primeros 5: [0,1,2,3,4]
console.log("únicos =", nums.slice(0, k)); // [0,1,2,3,4]
