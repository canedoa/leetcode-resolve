const string = "banana";

function countChars(str) {
  const words = {};

  for (let char of str) {
    if (words[char]) {
      // si ya existe, solo aumentamos el contador
      words[char]++;
    } else {
      // si no existe, lo inicializamos en 1
      words[char] = 1;
    }
  }

  return words;
}

//otra forma de resolverlo: Usamos operador OR

function countChars(str) {
  const counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return counts;
}
