// Escriba una función para encontrar la cadena de prefijo
// común más larga entre un array de cadenas.

// Si no hay prefijo común, devuelva una cadena vacía "".

const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
  let prefijo = strs[0]; //palabra flower

  for (let i = 1; i < strs.length; i++) {
    // pedimos que entre en la segunda palabra flow
    // Mientras la palabra actual NO empiece con el prefijo, lo recorto
    while (!strs[i].startsWith(prefijo)) {
      prefijo = prefijo.slice(0, -1); //corta la palabra del principio hasta el fin y excluye esa ultima letra
      if (prefijo === "") return ""; // devuelve una cadena vacia si no hay prefijo que coincida
    }
  }
  return prefijo;
}

//primera vuelta = flow empieza con flower?-> false, recortamos prefijo =flowe
//segunda vuelta dentro del while = flow empieza con flowe-->false, recortamos prefijo= flow
// tercera vuelta  flow empieza con flow--true, ahora prefijo = flow y el for empieza su segunda vuelta

//segunda vuelta del for, ahora fligth es la palabra a comparar
//fligth empieza con flow?-->false, prefijo = flo
//fligth empieza con flo?--> false, prefijo = fl
//flight empieza con fl? -> true, retornamos prefijo = fl.
