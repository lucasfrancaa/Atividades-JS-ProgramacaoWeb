let vetor = [];
let outros = vetor;

let lista = document.getElementById("posicao");
let num = document.getElementById("num");
let botao_limpar = document.getElementById("botaolimparvetor");
let botao_inserir = document.getElementById("botao_inserir");

function exibicaoLista(){
    lista = document.getElementById("posicao");
    let aLen = vetor.length;
    lista.innerHTML="";
    for (i = 0; i < aLen; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(vetor[i]));
        lista.appendChild(item);
    }
}

function inserirValorFinal(){
    num = parseInt(document.getElementById('input_numero').value);
    if(isNaN(num)){
        window.alert("Por favor, digite um número válido");
    }
    else{
        vetor.push(num);
        num = document.getElementById('input_numero').value="";
        num = document.getElementById('input_numero').focus();
        lista.innerHTML = " ";
        console.log(vetor);

        for (let i = 0; i < vetor.length; ++i) {
            lista.innerHTML += `<li>${vetor[i]}</li>`;
            }
    }
    exibicaoLista();
}

function esvaziarVetor() {
    //number.splice(0);
    vetor.length = 0;
    let limpar = document.getElementById("posicao");
    limpar.innerHTML = "";
    limpar.innerHTML = vetor.join("<br/>");
    }