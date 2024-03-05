// const investimentoMensal = [1000, 2000, 3000, 2000, 150, 1200, 1300];

// console.log(investimentoMensal);
// console.log(investimentoMensal[0]);
// console.log(investimentoMensal[7]);
// investimentoMensal[7] = 5000
// console.log(investimentoMensal[7]);


const listaNotas = [
    {nome: 'Daniel', nota: 5},
    {nome: 'Pedro', nota: 15},
    {nome: 'Lucas', nota: 12},
    {nome: 'Fabricio', nota: 16},
    {nome: 'Izabelle', nota: 18},
    {nome: 'Nathalia', nota: 20},
    {nome: 'Amanda', nota: 20},
    {nome: 'João', nota: 25},
]

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