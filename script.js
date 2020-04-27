// tarefa

// todoInput

const input = document.querySelector("#todoInput");
const submit = document.querySelector("#todoSubmit");
const lista = document.querySelector("#todoLista");

/**
 * CREATE/READ
 * 
 * - Quando eu digitar no input de "Adicione uma tarefa", e clicar em "Add", 
 * deve ser registrado numa lista;
 * = Deve ser exibido a tarefa na lista de tarefas abaixo;
 */

submit.onclick = function (evento) {
  evento.preventDefault();

  const tarefa = document.createElement('li');
  
  tarefa.innerHTML = `
    <label>
      <input type="checkbox">
      ${input.value}
    </label>
  `

  lista.appendChild(tarefa);
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
