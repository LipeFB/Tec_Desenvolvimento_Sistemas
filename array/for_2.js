const notas = [7, 8, 9, 5, 10, 9, 8, 9];

let valores = '';

for(let nota of notas ) {
  valores += nota + ' ';
}

let indices = '';

for(let nota in notas ) {
  indices += nota + ' ';
}


console.log(`Indice: ${indices}`);
console.log(`Notas:  ${valores}`);