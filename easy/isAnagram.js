const isAnagram = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a.length !== b.length) return false;
  const count = {};
  for (let char of a) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of b) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
};
