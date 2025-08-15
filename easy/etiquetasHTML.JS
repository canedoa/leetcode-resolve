let etiquetas = "<div><p></p></div>";

function isEtiquetas(s) {
  const cajita = [];
  let inicio = -1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "<") {
      inicio = i;
    } else if (ch === ">" && inicio !== -1) {
      const contenido = s.slice(inicio, i + 1); // incluye < y >
      cajita.push(contenido);
      inicio = -1; // listo para la siguiente etiqueta
    }
  }
  return cajita; // p. ej.: ["<div>", "<p>", "</p>", "</div>"]
}

function pares(cajita) {
  const paresEtiquetas = {
    "</div>": "<div>",
    "</p>": "<p>",
  };

  const pila = [];

  for (const ch of cajita) {
    if (ch.startsWith("</")) {
      // CIERRE
      if (pila.length === 0) return false; // nada que cerrar
      const ultimo = pila.pop(); // último abierto
      if (ultimo !== paresEtiquetas[ch]) return false; // deben corresponder
    } else if (ch === "<div>" || ch === "<p>") {
      pila.push(ch);
    } else {
      return false;
    }
  }

  return pila.length === 0; // validamos si no quedaron aperturas sin cerrar
}

// --- Pruebas ---
const tags = isEtiquetas(etiquetas);
console.log(tags); // ["<div>", "<p>", "</p>", "</div>"]
console.log(pares(tags)); // true

console.log(pares(isEtiquetas("<div><p></div></p>"))); // false (mal orden)
console.log(pares(isEtiquetas("<div><p></p>"))); // false (falta </div>)
console.log(pares(isEtiquetas("<p></p><div></div>"))); // true (pares seguidos)
