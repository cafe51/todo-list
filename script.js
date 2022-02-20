const listaTarefa = document.querySelector('#lista-tarefas');

function adcionarTarefas() {
  const inputTarefa = document.querySelector('#texto-tarefa');
  const tarefaNova = document.createElement('li');
  tarefaNova.setAttribute('class', 'tarefa');
  tarefaNova.innerText = inputTarefa.value;
  listaTarefa.appendChild(tarefaNova);
  inputTarefa.value = '';
}

function efeitoBotaoAdicinar() {
  const botaoAdcionar = document.querySelector('#criar-tarefa');
  botaoAdcionar.addEventListener('click', adcionarTarefas);
}

function listaCinza(evt) {
  const alvo = evt.target;
  const itens = listaTarefa.children;
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = '';
  }
  if (alvo.className === 'tarefa') {
    alvo.style.backgroundColor = 'grey';
  }
}

function efeitoListaCinza() {
  listaTarefa.addEventListener('click', listaCinza);
}

function listaRiscada(evt) {
  const alvo = evt.target;
  // if (alvo.tarefa.classList[0] === 'tarefa') {
  if (alvo.classList[1] !== 'completed') {
    alvo.classList.add('completed');
  } else alvo.classList.remove('completed');
}

function efeitoListaRiscada() {
  listaTarefa.addEventListener('dblclick', listaRiscada);
}

efeitoBotaoAdicinar();

efeitoListaCinza();

efeitoListaRiscada();

// .completed

// const tarefa = document.querySelector('.tarefa');
// tarefa.setAttribute('class', 'completed')
// tarefa.classList.add('completed');
