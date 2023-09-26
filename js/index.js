let chat = document.querySelector('#chat');
let input = document.querySelector('#input');
let botaoEnviar = document.querySelector('#botao-enviar');

function enviarMensagem() {
    if(input.value == "" || input.value == null) return;
    let message = input.value;
    let novaBolha = criaBolhaBot();
    novaBolha.innerHTML = message;
    chat.appendChild(novaBolha);
    input.value = "";
}

function criaBolhaUsuario() {
    let bolha = document.createElement('p');
    bolha.classList = 'chat__bolha chat__bolha--usuario';
    return bolha;
}

function criaBolhaBot() {
    let bolha = document.createElement('p');
    bolha.classList = 'chat__bolha chat__bolha--bot';
    return bolha;
}

botaoEnviar.addEventListener('click', enviarMensagem);
