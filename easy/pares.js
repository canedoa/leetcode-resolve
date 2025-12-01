const nums = [10, 20, 30, 40, 50];

const pares = nums.filter((element, index) => {
  return index % 2 === 0;
});

console.log(pares);