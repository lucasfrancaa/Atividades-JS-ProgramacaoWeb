let nome = prompt("Digite o seu nome").toLowerCase();
    while (nome == "") 
    {
        nome = prompt("Este campo não pode ficar em branco. Por favor, digite o seu nome");    
    }
    console.log(nome)

alert('Olá ' + nome + ', seja bem vindo/a!');