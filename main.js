//PUNTO 1

let numeros = [];

for (var i = 0; i < 10; i++) {
  var numero = Math.floor(Math.random() * 100) + 1;
    numeros.push(numero);
}

console.log(numeros);

//PUNTO 2

let input = prompt("Ingresa palabras separadas por comas:");
let arrayPalabras = input.split(",");

console.log(arrayPalabras);

//PUNTO 3

let arreglo = [10, 40, 30, 20, 15, 5];

console.log("Arreglo ordenado de menor a mayor:");
console.log(arreglo.sort(function(a, b) {
    return a - b;
}));

console.log("Número menor:", Math.min(...arreglo));
console.log("Número mayor:", Math.max(...arreglo));
