// Dada una cadena s compuesta de palabras y espacios,
// devuelve la longitud de la última palabra de la cadena.

// Una palabra es una subcadena máxima compuesta
// únicamente de caracteres que no son espacios.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

const s = "Hello World";

function lengthOfLastWord(s) {
  //quitamos espacios al inicio y al final
  s = s.trim();

  //dividimos por palabras

  let words = s.split(" ");

  //split divide la cadena en mas pequeñas encontrando el espacio
  //split regresa un array
  // let words =["Hola","Mundo"];

  let finalWord = words[words.length - 1].length;

  return finalWord;
  //  let finalWord = words[2-1]; y si el arrray empeiza en 0
  //el indice de la ultima palabra es 1 por loq ue es correcto
}
