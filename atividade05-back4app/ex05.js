Parse.initialize("kiajRESRXwPCB4sWMa1DBtcPsuQGx3gvPv8dFbOu", "L6R5PVLhcy8lFobCVlAn98tLKKezS7cmpIKIUo0A");
Parse.serverURL = "https://parseapi.back4app.com/";

let vetCargos = [];
const listagem = document.getElementById("listagem");
const inputNome = document.getElementById("inputNome");
const inputModalidade = document.getElementById("inputModalidade");
const inputDescricao = document.getElementById("inputDescricao");
const btn = document.getElementById("btnInserir");


function gerarListagem() {
  listagem.innerHTML = "";
  for (let i = 0; i < vetCargos.length; ++i) {
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${vetCargos[i].Nome} || Modalidade: ${vetCargos[i].Modalidade} ||  Descricao: ${vetCargos[i].Descricao}`
    );
    li.appendChild(txt);
    listagem.appendChild(li);
  }
};


const gerar = async () => {
  const Cargos = Parse.Object.extend("Cargos");
  const query = new Parse.Query(Cargos);
  try {
    const results = await query.find();
    vetCargos = [];
    for (const object of results) {
      const Nome = object.get("Nome")
      const Modalidade = object.get("Modalidade")
      const Descricao = object.get("Descricao")
      vetCargos.push({Nome, Modalidade, Descricao});
    }
    gerarListagem();
  } catch (error) {
    console.error('Erro ao buscar cargos', error);
  }
};

const inserir = async () => {
  const myNewObject = new Parse.Object('Cargos');
  myNewObject.set('Nome', inputNome.value);
  myNewObject.set('Modalidade', inputModalidade.value);
  myNewObject.set('Descricao', inputDescricao.value);

  try {
    const result = await myNewObject.save();
    console.log('Cargos criados', result);
    gerar();
    inputNome.value="";
    inputModalidade.value="";
    inputDescricao.value="";
  } catch (error) {
    console.error('Erro ao criar cargos ', error);
  }
};

gerar();

btn.onclick = inserir;