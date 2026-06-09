// Função do botão FILTRAR
function filtrarVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Buscando avarias registradas...";
}

// Função do botão LIMPAR
function limparVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Todos os campos foram limpos!";
    
    
}

// Função do botão CADASTRO
function cadastrarVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Sucesso! Avaria cadastrada.";
}

// Função do botão ANEXAR
function anexarVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Janela de arquivos aberta. Selecione a foto,video ou NF da avaria.";
}


