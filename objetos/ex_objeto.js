const aluno = {
  nome: "Felipe",
  idade: 17,
  curso: "Desenvolvimento de Sistemas"
};

console.log(aluno)

console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A";
aluno.idade = 18;

delete aluno.curso;

const carro = {
  modelo: "Civic",
  ano: 2020,
  ligar: function () {
    console.log("Carro ligado!");
  }
}

carro.ligar();


const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 }
];

console.log(produtos[1].nome);  // Mouse