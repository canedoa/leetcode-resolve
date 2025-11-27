const str = "aabbcdd";

function firstNonRepeated(str) {
  let map = new Map();

  // Contar cuántas veces aparece cada letra
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Buscar el primer char con count === 1
  for (let char of str) {
    if (map.get(char) === 1) {
      return char;
    }
  }

  return null; // Si no existe
}
