// Função do botão FILTRAR
function filtrarVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Buscando avarias registradas para a filial selecionada...";
}

// Função do botão LIMPAR
function limparVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Todos os campos do formulário foram limpos!";
    
    
}

// Função do botão CADASTRO
function cadastrarVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Sucesso! Avaria cadastrada no sistema.";
}

// Função do botão ANEXAR
function anexarVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Janela de arquivos aberta. Selecione as fotos da avaria.";
}