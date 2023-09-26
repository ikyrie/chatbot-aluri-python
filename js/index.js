let chat = document.querySelector('#chat');
let input = document.querySelector('#input');
let botaoEnviar = document.querySelector('#botao-enviar');

function enviarMensagem() {
    if(input.value == "" || input.value == null) return;
    let message = input.value;
    let novaBolha = criaBolhaUsuario();
    novaBolha.innerHTML = message;
    chat.appendChild(novaBolha);
    vaiParaFinalDoChat();
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

function vaiParaFinalDoChat() {
    chat.scrollTop = chat.scrollHeight;
}

botaoEnviar.addEventListener('click', enviarMensagem);
