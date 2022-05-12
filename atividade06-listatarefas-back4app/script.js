Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  '6sqR8lj8A6drJwzAts5zlY6YCvAyKC2ajT592cnh', // This is your Application ID
  'oZlNPuvZZvj4uUWeGxBcXkFiWfOUdjOLwxHhMqUj' // This is your Javascript key
);


const div = document.getElementById("div");
const inputdescricao = document.getElementById("adicionatarefa");
const botaoinserir = document.getElementById("inserir");

let vetortarefas = [];

function gerarLista() {
  div.innerHTML = "";
  for (let i = 0; i < vetortarefas.length; ++i) {

    const li = document.createElement("li");

    const txt = document.createTextNode(
      `${vetortarefas[i].get("descricao")}`
    );
    txt.id= "txt";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "check";
    check.checked = vetortarefas[i].get("concluida");
    check.onclick = (evt) => checktarefa(evt, vetortarefas[i], txt);

    const botaoremover = document.createElement("button");
    botaoremover.innerHTML = 'remover';
    botaoremover.id = "botaoremover";
    botaoremover.onclick = (evt2) => removertarefa(evt2, vetortarefas[i]);

    li.appendChild(check);
    li.appendChild(txt);
    div.appendChild(li);
    li.appendChild(botaoremover);
  }
}

const lista = async () => {
  const Tarefa = Parse.Object.extend('Tarefa');
  const query = new Parse.Query(Tarefa);
  try {
    const results = await query.find();
    vetortarefas = results;
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Tarefa', error);
  }
};

const inserir = async () => {
  const myNewObject = new Parse.Object('Tarefa');
  myNewObject.set('descricao', inputdescricao.value);
  myNewObject.set('concluida', false);
  inputdescricao.value = "";
  inputdescricao.focus();
  try {
    const result = await myNewObject.save();
    console.log('Tarefa created', result);
    lista();
  } catch (error) {
    console.error('Error while creating Tarefa: ', error);
  }
};

const removertarefa = async (evt2, tarefa) => {
    tarefa.set(evt2.target.remove);
    try {
      const response = await tarefa.destroy();
      console.log('Delet ParseObject', response);
      lista();
    } catch (error) {
      console.error('Error while updating Tarefa', error);
    }
  };

const checktarefa = async (evt, tarefa, txt) => {
  tarefa.set('concluida', evt.target.checked);
  try {
    const response = await tarefa.save();
    console.log(response.get('concluida'));
    console.log('Tarefa updated', response)
  } catch (error) {
    console.error('Error while updating Tarefa', error);
  }
};

botaoinserir.onclick = inserir;
lista();
gerarLista();