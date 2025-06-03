function jogar (escolhaUsuario){
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random()*3)];

    let mensagem = '';

    document.getElementById('imagem').classList.remove('borda');
    document.getElementById('pedrau').classList.remove('borda');
    document.getElementById('papelu').classList.remove('borda');
    document.getElementById('tesourau').classList.remove('borda');

    document.getElementById('pedrau').classList.remove('bordaInicial');
    document.getElementById('papelu').classList.remove('bordaInicial');
    document.getElementById('tesourau').classList.remove('bordaInicial');

    if(escolhaUsuario === escolhaComputador){

        mensagem = 'Empate! 😒😒😒 Ambos escolheram ' + escolhaUsuario + '.';

    } else if
        (

            (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') || 
            (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
            (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') 

        ) {

            mensagem = 'Você ganhou! 🤪🤪🤪' + escolhaUsuario + ' vence ' + escolhaComputador + '.';

        } else {

            mensagem = 'Você perdeu! 😎😎😎' + escolhaComputador + ' vence' + escolhaUsuario + '.';

        }

    document.getElementById('mensagem').innerHTML = mensagem;    

    switch (escolhaUsuario){

        case 'pedra':
        document.getElementById('pedrau').classList.add('borda');
        break;
        
        case 'papel':
        document.getElementById('papelu').classList.add('borda');
        break;

        case 'tesoura':
        document.getElementById('tesourau').classList.add('borda');
        break;

    }

    switch(escolhaComputador){

        case 'pedra':
            document.getElementById('imagem').src = './assets/Imagens/Pedra.png';
            document.getElementById('imagem').classList.add('borda');
            break;

        case 'papel':
            document.getElementById('imagem').src = './assets/Imagens/Papel.png';
            document.getElementById('imagem').classList.add('borda');
            break;

        case 'tesoura':
            document.getElementById('imagem').src = './assets/Imagens/Tesoura.png';
            document.getElementById('imagem').classList.add('borda');
            break;
    }

}

window.onload = function (){
    document.getElementById('pedrau').classList.add('bordaInicial');
    document.getElementById('papelu').classList.add('bordaInicial');
    document.getElementById('tesourau').classList.add('bordaInicial');

}