const products = [
  { name: "book", price: 10 },
  { name: "pencil", price: 5 },
  { name: "keyboard", price: 30 },
  { name: "mouse", price: 25 },
];

const processProducts = (products) =>
  products
    .filter(({ price }) => price > 20) //para filtrar mayores de 20
    .sort((a, b) => a.price - b.price) //comparacion de forma ascendente
    .map(({ name }) => name.toUpperCase()); //solo ocupamos los nombres en mayusculas

console.log(processProducts(products));
