function isHappy(n) {
  // Para recordar los números que ya vimos (para detectar ciclo)
  let seen = new Set();

  // repetir hasta que n sea 1
  while (n !== 1) {
    // si ya vimos este número antes, entonces es un ciclo
    if (seen.has(n)) {
      return false;
    }

    // si no lo hemos visto → lo guardamos
    seen.add(n);

    // convertimos el número a string  a arreglo de dígitos
    let digits = n.toString().split("");

    // calculamos la suma de cuadrados
    let sum = 0;
    for (let d of digits) {
      sum += Number(d) ** 2;
    }

    // actualizamos n con la suma obtenida
    n = sum;
  }

  // si salimos del while fue porque n === 1
  return true;
}
