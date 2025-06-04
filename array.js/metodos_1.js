const numeros = [1, 2, 3, 4, 5, 8];
const valores = [20, 30, 40, 50]

// Adicionar numeros
numeros[0] = 100; // Substitui caso o indice ja exista
numeros.push(6); // Adiciona no final

console.log(numeros.indexOf(4));
console.log(numeros.includes(23));
console.log(numeros.join("-"));
console.log(numeros.concat(valores));