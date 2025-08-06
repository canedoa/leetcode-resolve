//Funcion menos eficiente pero llegamos al mismo resultado
const nums = [2, 7, 11, 15];
const target = 9; // realizar pruebas con 17 y 22

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(nums, target));

//forma más optima con hashmap

const nums2 = [2, 7, 11, 15];
const target2 = 9;

function twoSum2(nums2, target2) {
  const map = new Map(); //en la primera vuelta map ya tiene 2:0
  //MAP{Clave:valor} Clave es el numero y el valor el indice
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]; // num = 2
    const complemento = target2 - num; // 9-2=7, en la vuelta dos 9-7=2

    console.log(`👉 Iteración ${i}`);
    console.log(`num = ${num}, complemento = ${complemento}`);
    console.log(`map.has(${complemento}) = ${map.has(complemento)}`);

    if (map.has(complemento)) {
      return [map.get(complemento), i];
      //valor del complement=0, y la i es la actual posicion i=1 [0,1]

      //Vuelta 1
      // num = 2
      // complemento = 7
      //map.has(7) = false
      // map.set(num,i)=2,0)--guardamos en el map el 2 porque no es elcomplemento que buscamos

      //Vuelta 2
      // num = 7
      // complemento = 2
      // map.has(2) → ya visto en la vuelta 1, es true
      // map.get(2) → 0
    }

    map.set(num, i); // guardamos el numero ya visto y el indicie
  }
}

console.log(twoSum2(nums2, target2)); //  Llamada correcta
