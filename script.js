function adcionarTarefas() {
  const listaTarefa = document.querySelector('#lista-tarefas');
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
  const listaTarefa = document.querySelector('#lista-tarefas');
  const itens = listaTarefa.children;
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = '';
  }
  if (alvo.className === 'tarefa') {
    alvo.style.backgroundColor = 'grey';
  }
}

function efeitoListaCinza() {
  const listaTarefa = document.querySelector('#lista-tarefas');
  listaTarefa.addEventListener('click', listaCinza);
}

efeitoBotaoAdicinar();

efeitoListaCinza();
