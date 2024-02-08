const usuario = { nome: 'Matheus', idade: 24, time: 'Fluminense' };
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemDeBoasVindas4 = 'Bem vindo, torcedor Santista!';
const mensagemDeBoasVindas5 = 'Bem vindo, torcedor do Náutico!';
const mensagemDeBoasVindasGeral = 'Bem vindo, amante do esporte!';


if (usuario.time === 'Fluminense') {
  console.log(mensagemDeBoasVindas1);
} else if (usuario.time === 'Flamengo') {
  console.log(mensagemDeBoasVindas2);
} else if (usuario.time === 'Vasco') {
  console.log(mensagemDeBoasVindas3);
} else if (usuario.time === 'Santos') {
  console.log(mensagemDeBoasVindas4);
} else if (usuario.time === 'Náutico') {
  console.log(mensagemDeBoasVindas5);
} else {
  console.log(mensagemDeBoasVindasGeral);
}

const mensagemDeEscolha =
  'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
