var numId = 0;

function addTask() {
  // Verificar se foi digitado algo no input para add tarefa
  const inputTask = document.getElementById('taskname');
  console.log(inputTask.value);
  if (inputTask.value === '') {
    alert('Digite uma tarefa válida');
    return;
  } 
  //Adicionar a task no ul
  // Incrementar o numero do ID
  numId ++;
  const listaUl = document.getElementById('list');

  newLi = createLiTask(inputTask.value);

  newButton = createButtonRemoveTask();

  // Adicionar o Botao no Li
  newLi.appendChild(newButton);
  // Adicionar o Li na Ul
  listaUl.appendChild(newLi);
}

function createLiTask(text){
  // Criar nova Li
  const newLi = document.createElement('li');
  // Setar o nome que aparecerá na Li
  newLi.textContent = text;
  // Setar id da Li
  newLi.setAttribute('id', `task-${numId}`);

  return newLi
}

function createButtonRemoveTask() {
  // Criar novo botão
  const newButton = document.createElement('button');
  // Indicar texto a aparecer
  newButton.innerText = 'Remover';
  // Setar o atributo de OnClick
  newButton.setAttribute('onclick', `removerTask('task-${numId}')`);
  // Setar o atributo de Name
  newButton.setAttribute('name', `task-${numId}`);

  return newButton
}

function removerTask(id) {
  const idRemove = document.getElementById(id);
  idRemove.remove();
}