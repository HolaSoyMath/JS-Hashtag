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
documentoIdentidade.diaNiver = 14;
console.log(documentoIdentidade);