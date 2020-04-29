// tarefa

// todoInput

const input = document.querySelector("#todoInput");
const form = document.querySelector("#todoForm");
const lista = document.querySelector("#todoLista");

input.required = true;


/**
 * CREATE/READ
 * 
 * - Quando eu digitar no input de "Adicione uma tarefa", e clicar em "Add", 
 * deve ser registrado numa lista;
 * = Deve ser exibido a tarefa na lista de tarefas abaixo;
 */

form.onsubmit = function (evento) {
  evento.preventDefault();

  const tarefa = document.createElement('li');
  
  tarefa.innerHTML = ` <label> <input type="checkbox"> ${input.value} </label> `
 
  lista.appendChild(tarefa);
  input.value='';
};

/**
 * UPDATE
 * 
 * Na tarefa exibida na lista, devo poder marcar um tarefa especifica como realizada e assim exibir;
 * No rodapé do projeto um botão "Marcar todos", deve marcar todas as tarefas como realizadas;
 */

const tarefa = lista.querySelectorAll('label');

console.log(tarefa);

/**
 * DELETE
 * 
 * Na tarefa exibida na lista, devo poder apagar um tarefa especifica;
 * No rodapé do projeto um botão "Limpar lista", deve remover todas as tarefas já realizadas;
 */
