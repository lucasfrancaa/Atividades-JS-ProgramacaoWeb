function retorno (){
    let maximo = parseInt(document.getElementById('valormaior').value);
    let minimo = parseInt(document.getElementById('valormenor').value);
    let tabela  = document.getElementById('tabela');
    let qtd_numeros = document.getElementById('qtd_numeros').value;
    let colunas = document.getElementById('colunas').value;
    tabela.innerHTML = "";
    for (let i = 1; i <= qtd_numeros; i++){
        tabela.innerHTML += Math.trunc(Math.random() * (maximo - minimo) + minimo) + "\t";
    if (i % colunas == 0) {
        tabela.innerHTML += "\n";
    }
}

} 