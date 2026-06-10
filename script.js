let registros = [];


function filtrarVerificacao() {

    const resultado =
        document.getElementById('resultado-pesquisa');

    resultado.innerHTML = `
        <h3>Registro Encontrado</h3>

        <p><strong>Motorista:</strong> João Silva</p>

        <p><strong>Placa:</strong> ABC-1234</p>

        <p><strong>Cliente:</strong> Mercado XPTO</p>

        <p><strong>CT-e:</strong> 123456</p>

        <p><strong>Nota Fiscal:</strong> 78910</p>
    `;
}

// Função do botão LIMPAR
function limparVerificacao() {
    const campoMensagem = document.getElementById('mensagem-sistema');
    campoMensagem.innerHTML = "Todos os campos foram limpos!";
    
    
}

function cadastrarVerificacao() {

    const motorista =
        document.getElementById("motorista").value;

    const placa =
        document.getElementById("placa").value;

    const cliente =
        document.getElementById("cliente").value;

    const cte =
        document.getElementById("cte").value;

    const nota =
        document.getElementById("nota").value;

    const cnpj =
        document.getElementById("cnpj").value;

    const data =
        document.getElementById("data").value;

    const arquivo =
        document.getElementById("arquivo").files[0];

    registros.push({
        motorista,
        placa,
        cliente,
        cte,
        nota,
        cnpj,
        data,
        arquivo: arquivo ? arquivo.name : "Sem arquivo"
    });

    console.log(registros);

    document.getElementById("resultado-pesquisa")
    .innerHTML = `
        <h3>Avaria cadastrada com sucesso!</h3>

        <p><strong>Motorista:</strong> ${motorista}</p>

        <p><strong>Placa:</strong> ${placa}</p>

        <p><strong>Arquivo:</strong>
        ${arquivo ? arquivo.name : "Nenhum"}</p>
    `;
}

{
    campoMensagem.innerHTML = "Janela de arquivos aberta. Selecione a foto,video ou NF da avaria.";
}


document.addEventListener("DOMContentLoaded", () => {

    const botaoAnexo = document.getElementById("btn-anexo");
    const arquivo = document.getElementById("arquivo");
    const nomeArquivo = document.getElementById("nome-arquivo");

    botaoAnexo.addEventListener("click", () => {
        arquivo.click();
    });

    arquivo.addEventListener("change", () => {

        if (arquivo.files.length > 0) {

            nomeArquivo.textContent =
                arquivo.files[0].name;

        }

    });

});