/* DESAFIO EM DUPLA */

/*Desenvolver uma aplicacao utilizando os conceitos que aprendemos ate agora para criar uma validacao de notas com um programa */

/* PROIBIDO CHATGPT OU QUALQUER OUTRA IA */

/* function () {
  switch () {
    10 = A+
    9 = A
    8 = B+
    7 = B
    6 = C+
    5 = C
    4 = D+
    3 = D
    2 = E+
    1 = E
    0 = F
    default = "mensagem de erro"
} */

/* Imprimir na tela a nota */

let notaFelipe = 10;

function validacaoNota (nota) {
  switch (nota){
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 4:
      return "D+";
    case 3:
      return "D";
    case 2:
      return "E+";
    case 1:
      return "E";
    case 0:
      return "F"
    default:
      return("Informacao invalida!")
  }
}

  console.log(validacaoNota(notaFelipe));