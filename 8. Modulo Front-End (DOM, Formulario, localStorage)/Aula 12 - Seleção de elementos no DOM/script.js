// getElementsByTagName: Seleciona elementos pelo nome da tag.
const titulo = document.getElementsByTagName('h2');
console.log ('selecionando pela tag h2', titulo);

// getElementsByClassName: Seleciona elementos por classe.
const pragrafosItens = document.getElementsByClassName('texto-lista');
console.log ('selecionando pela classe texto-lista', pragrafosItens);

// getElementById: Seleciona UM elementos pelo ID
const destacado = document.getElementById('destacado');
console.log('Selecionando por ID: ', destacado);

// querySelector: Seleciona um elemento usando um seletor CSS.
const destacadoSelector = document.querySelector('#destacado');
console.log('Selecionando por ID por seletor css: ', destacadoSelector);

// querySelectorAll: Seleciona todos os elementos que correspondem a um seletor CSS.
const todosPItens = document.querySelectorAll('.texto-lista')
console.log('Selecionando por múltiplos elementos por seletor css: ', todosPItens);

//getElementsByName: Selecioa elementos pelo atributo name.
const inputName = document.getElementsByName('username')
console.log('Selecionando por atributo name(username): ', inputName);

// querySelectorAll('*'): Seleciona TODOS os elementos no documento.
const todosElementos = document.querySelectorAll('*')
console.log('Selecionando todos os elementos: ', todosElementos);