const words = "Hola Munndo";
function countWords(str) {
  const result = str.trim().split(" ");
  return result.length;
}

const counWords = (arr) =>
  arr
    .trim()
    .split(" ")
    .filter((w) => w !== "");
