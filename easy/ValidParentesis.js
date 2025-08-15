// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//PASOS:
//Asignarvalores a los parentesis, llaves y corchetes
//

let parentesis = "{()}"; //variable que contiene el string

function isValid(string) {
  if (string.length % 2 !== 0) {
    //si la cantidad de parentesis no  es par
    //es decir no nos da cero, entonces no es válido y retornamos false

    return false;
  }

  const pares = {
    //creamos un objeto o podemos hacer un switch
    //pero esta es una forma mas reducida

    "}": "{",
    ")": "(",
    "]": "[",
  };

  const pila = []; //creamos un array vacio

  //recorreremos el string con un for of

  for (const caracter of parentesis) {
    if (caracter === "(" || caracter === "{" || caracter === "[") {
      pila.push(caracter);
      // Si alguno de los caracteres que recorrimos es abierto,
      // entonces lo guardamos en nuestro array "pila"
    } else {
      if (pila.length === 0) return false; //si esta vqaica y es de cierre damos falso
      const ultimo = pila.pop(); //sacamos el ultimo

      //ahora como estamos en el else,
      // donde si o si debe ser un parentesis cerrado
      //debemos verificar si el ultimo elemento en nuestr pila es abierto

      if (ultimo !== pares[caracter]) {
        //validamos si el ultomo sacado es igual al valor de la clave en el array pares
        return false;
      }
    }
  }

  return pila.length === 0; // si ya no hay corchet4es que emparejar retornamos true
}
