const archivos = ["IMG_001.jpg", "IMG_002.png", "DOC_001.pdf", "IMG_003.jpeg", "VID_001.mp4", "IMG_004.jpg"];

let palabra = "IMG_";
let imagenes = [];

function Archivos(word) {
  for (i = 0; i < word.length; i++) {
    if (word[i].startsWith(palabra)) {
      imagenes.push(word[i]);
    }
  }

  return imagenes;
}

console.log(Archivos(archivos));
