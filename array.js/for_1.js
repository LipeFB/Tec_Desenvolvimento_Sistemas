const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.push(200);
numeros.push(309);

for (let i = 0; i < numeros.length; i+= 2) {
  console.log(numeros[i]);
}