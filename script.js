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
//criamos nosso elemento para a tarefa
  const tarefa = document.createElement('li');
 //criamos a label e check com o texto que foi inserido no campo (escrevendo o html dentro do elemento)
  tarefa.innerHTML = ` <label> <input type="checkbox"> ${input.value} </label> `
 // o apendice coloca o elemento dentro da lista de tarefa
  lista.appendChild(tarefa );
  //limpa
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


//botao de marcar tudo
const buttontodoMarcarTodos = document.querySelector('#todoMarcarTodos');
buttontodoMarcarTodos.addEventListener('click', function(){
  const listacheckbox = lista.querySelectorAll('input')// meu array (checkbox)

// aqui a gente ta pegando a quatidade de tarefas que o usuario colocou e esse i eé o nosso contador 
  for (let i = 0; i<listacheckbox.length; i++){
    listacheckbox[i].checked = true;
  }


})
/**
 * DELETE
 * 
 * Na tarefa exibida na lista, devo poder apagar um tarefa especifica;
 * No rodapé do projeto um botão "Limpar lista", deve remover todas as tarefas já realizadas;
 */
const buttontodoRemoverTodos = document.querySelector('#todoRemoverTodos');
buttontodoRemoverTodos.addEventListener('click', function(){
lista.innerHTML='';
}) 