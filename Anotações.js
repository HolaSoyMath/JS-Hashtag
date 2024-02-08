// ********** Escrever no meio de uma console.log **********
Ao invés de aspas devemos utilizar a crase na string
Para colocar a variável na string, utilizamos ${nomeDaVariavel}

// ********** Tipos de variáveis **********

let --> Pode alterar o valor da variável
const --> Após a declaraçõa nao é possível alterar nada

// ********** Comparadores **********

= --> Atribui valor a variável
== --> Verificar se o valor é o mesmo
=== --> Verificar se o valor E o tipo é o mesmo
!= --> Verificar se o valor é diferente
!== --> Verificar se o valor E o tipo são diferentes

// ********** Dicionário********** 
// OBS: Pode ser "let" também
const documentoIdentidade = {
    nome: 'Matheus',
    sobrenome: 'Santos',
    cpf: '111.111.111.11',
    empresa: 'HPP',
    idade: 24,
};

console.log(documentoIdentidade);
console.log(documentoIdentidade.nome);
console.log(documentoIdentidade["nome"]);
documentoIdentidade.diaNiver = 14; // Adicionar um novo campo no dicionário
console.log(documentoIdentidade);

// ********** Array **********
const investimentoMensal = [1000, 2000, 3000, 2000, 150, 1200, 1300];

console.log(investimentoMensal);
console.log(investimentoMensal[0]);
console.log(investimentoMensal[7]);
investimentoMensal[7] = 5000 // Adicionar novo valor no Array
console.log(investimentoMensal[7]);

// Filter --> Método responsável por gerar um novo array resultado de um filtro estabelecido, pega todos os alunos que se adequam ao filtro
const alunosAprovados = listaNotas.filter(function (aluno){
    return aluno.nota>=16;
})

console.log(alunosAprovados);


// Find --> não gera uma lista, pega apenas o primeiro aluno...
const alunos20 = listaNotas.find(function (aluno){
    return aluno.nota === 20;
})

console.log(alunos20);

// Map --> Cria uma lista apenas com o Nome dos alunos, pega apenas um índice de toda a lista principal
const nomes = listaNotas.map(function (aluno){
    return aluno.nome;
})

console.log(nomes);

// Retirar uma parte do array e criar um array menor
alunosAprovados.splice(2) // Pega todos os valores a partir do índice 2 transformando em um outro array

// ********** Function **********
function pegarComando() {
    console.log('Olá, boa noite!!!');
    console.log('Pegue aqui sua comanda');
    console.log('Bom apetite!!!');
    console.log('-------------------');
}
pegarComando();

// Retorno de valor em uma Function
function calcularRaizQuadrada(base) {
    return base **(1/2);
}

let valorRaizQuadrada = calcularRaizQuadrada(4);


// ********** CONDICIONAIS **********
// If-Else
if (usuario.time === 'Fluminense') {
  console.log(mensagemDeBoasVindas1);
} else if (usuario.time === 'Flamengo') {
  console.log(mensagemDeBoasVindas2);
} else {
  console.log(mensagemDeBoasVindas3);
}

// Operador ternário
usuario.time === 'Fluminense'
  ? console.log(mensagemDeBoasVindas1)
  : console.log(mensagemDeBoasVindas2);

// Switch-Case
switch (usuario.time) {
  case 'São Paulo':
  case 'Fluminense':
    console.log(mensagemDeBoasVindas1);
    break;
  case 'Flamengo':
    console.log(mensagemDeBoasVindas2);
    break;
  case 'Vasco':
    console.log(mensagemDeBoasVindas3);
    break;
  case 'Santos':
    console.log(mensagemDeBoasVindas4);
    break;
  case 'Náutico':
    console.log(mensagemDeBoasVindas5);
    break;
  default:
    console.log(mensagemDeBoasVindasGeral);
}

// ********** LOOPINGS **********
// Do... While (Faz a primeira vez e depois verificar se continua repetindo o Looping)
do {
    usuario.time === 'Fluminense' && usuario.idade >= 18
        ? console.log(mensagemDeBoasVindas1)
        : usuario.time === 'Flamengo' && usuario.idade >= 18
        ? console.log(mensagemDeBoasVindas2)
        : usuario.idade >= 18
        ? console.log(mensagemDeBoasVindasGeral)
        : console.log('Não vendemos ingresso para torcedores menores de 18 anos');
    
    console.log(mensagemDeEscolha);
    console.log(mensagemFinal);

    numeroDeRepeticoes ++;

} while (numeroDeRepeticoes < 50000)
	

// While (Verifica a condição, depois executa as instruções do Looping)
function calculateFibonacciTerm(termNumber){
  let lastTerm = 1;
  let secondToLast = 0;

  if (termNumber === 0){
    return 0;
  }
  if (termNumber === 1){
    return 1;
  }
  letCurrentIteration = 2;
  while(letCurrentIteration <= termNumber){
    let auxVar = lastTerm + secondToLast;
    secondToLast = lastTerm;
    lastTerm = auxVar;
    letCurrentIteration++;
  }
  return lastTerm;
}

let termo = 6;

console.log(`O valor do termo número ${termo} da sequencia de fibonacci é ${calculateFibonacciTerm(`${termo}`)}`);


// For
for(let count = 0; count < regularArray.lenght; count++) {
    regularArray[count] += count;
}

// For Each
const car = {
    brand: 'Toyota',
    model: 'Canry',
    year: 2023,
    color: 'Silver',
    fuelType: 'Gasoline',
    engineCapacity: '2.5L',
    transmission: 'Automatic',
    power: '203 horsepower',
    seatingCapacity: 5,
    price: '$25,000'
};

for (info in car) {
    console.log(`${info}: ${car[info]}`);
}
	// Acessar os valores em si dentro de um Array
const names = [
    'Izabele',
    'Daniel',
    'Fabrício',
    'Rodrigo',
    'Jorge',
    'Lira',
    'Camila',
    'Matheus',
    'Gabriel',
];

for(personName of names){
    console.log(personName);
}


// Try, throw, catch
try {
    if (radicand < 0){
      throw new Error ("O radicando deve ser real e positivo"); // Ele aparece essa informação no LOG e então passa para a parte do Catch
    }
    return radicand ** (1 / 2);
  } catch (error ){
    console.log(error);
  } finally { // O Finally nao é obrigatório
	  
  }