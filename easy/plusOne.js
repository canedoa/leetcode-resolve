// Se le proporciona un entero grande representado
// como una matriz de enteros dígitos, donde cada
// dígito[i] es el i-ésimo dígito del entero.
// Los dígitos están ordenados de mayor a menor valor,
// de izquierda a derecha. El entero grande no contiene ningún
// cero inicial.

// Incremente el entero grande en uno y devuelva la matriz
// de dígitos resultante.
// Entrada: dígitos = [1,2,3]
// Salida: [1,2,4]
// Explicación: La matriz representa el entero 123.
// Al incrementar en uno, se obtiene 123 + 1 = 124.
// Por lo tanto, el resultado debería ser [1,2,4].

// const digits = [1, 2, 4];

// function plusOne(digits) {
//   let numStr = digits.join(""); // "124"
//   let num = Number(numStr); // 124
//   let incremented = num + 1; // 125
//   return incremented.toString().split("").map(Number); // [1, 2, 5]
// }

// console.log(plusOne(digits)); // [1, 2, 5]

function plusOne(digits) {
  let numStr = digits.join("");
  let incremented = BigInt(numStr) + 1n;
  return incremented.toString().split("").map(Number);
}

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]
