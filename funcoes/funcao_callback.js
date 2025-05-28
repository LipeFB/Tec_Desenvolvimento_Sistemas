function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

function multiplicar(x, y) {
  return x * y;
}

let resultado = executarOperacao(2, 50, multiplicar);
console.log(`Multiplicacao: ${resultado}`);