//Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

let x = "ana";

const str = x.toString(); //conertirmos la variable en un string si es que se ingresa un numero

const reverse = str.split("").reverse().join(""); // importante: join('') con comillas simples ´para usar sin comas
//["a","n","a"] join= "ana"

if (reverse === x) {
  console.log("La entrada es un palindromo");
} else {
  console.log("No es un palindromo");
}

//si queremos hacerlo con con funcion que no retono true o false

const y = 121;

function palindromo(y) {
  const str = y.toString();
  const alreves = str.split("").reverse().join("");
  return alreves === str;
}

console.log(palindromo(y));
