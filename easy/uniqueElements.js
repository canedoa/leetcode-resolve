const arr = [1, 2, 2, 3];

function uniqueElements(arr) {
  let unique = new Set();
  let repeted = new Set();

  for (let n of arr) {
    if (unique.has(n)) {
      repeted.add(n);
    } else {
      unique.add(n);
    }
  }

  // Filtrar solo los que NO están repetidos
  let result = [];
  for (let n of unique) {
    if (!repeted.has(n)) {
      result.push(n);
    }
  }

  return result;
}
