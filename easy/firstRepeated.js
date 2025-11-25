function firstRepeated(arr) {
  let seen = new Set(); // Set correcto
  let repeated = -1; // valor por defecto

  for (let char of arr) {
    if (seen.has(char)) {
      // si ya existe → es el primer repetido
      repeated = char;
      return repeated; // lo regresamos inmediatamente
    } else {
      seen.add(char); // si no existe → lo guardamos
    }
  }

  return repeated; // si nunca se repite → -1
}

console.log(firstRepeated([2, 5, 1, 2, 3, 5])); // 2

//otra forma mas compacta
function firstRepeated(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return -1;
}

