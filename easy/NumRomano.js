// Los números romanos se representan mediante siete símbolos diferentes:  I, V, X, L, C, D, M.

//        Valor del símbolo
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
// Por ejemplo,  2se escribe como II en números romanos, solo que se suman dos unidades.
// 12se escribe como  XII, que es simplemente X + II. El número 27se escribe como XXVII,
// que es XX + V + II.

// Los números romanos suelen escribirse de mayor a menor, de izquierda a derecha. Sin embargo,
// el número cuatro no es IIII. En su lugar, se escribe IV.
// Como el uno está antes del cinco, lo restamos, obteniendo un cuatro.
// El mismo principio se aplica al número nueve, que se escribe IX. Hay seis casos en los que se utiliza la resta:

// Ise puede colocar antes de V(5) y X(10) para formar 4 y 9.
// Xse puede colocar antes de L(50) y C(100) para formar 40 y 90.
// Cse puede colocar antes de D(500) y M(1000) para formar 400 y 900.
// Dado un número romano, conviértalo en un entero.

// Ejemplo 1:

// Entrada: s = "III"
//  Salida: 3
//  Explicación: III = 3.

let romano = "XXXV";

function ConvertiraDecimal(romano) {
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romano.length; i++) {
    const actual = valores[romano[i]];
    const siguiente = valores[romano[i + 1]];

    if (siguiente > actual) {
      result -= actual;
    } else {
      result += actual;
    }
  }

  return result;
}

console.log(ConvertiraDecimal(romano));
