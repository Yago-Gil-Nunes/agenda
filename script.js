// Array para armazenar os números de telefone já cadastrados
const numerosDeTelefone = [];

// Função para exibir mensagens de erro
function exibirMensagemDeErro(mensagem) {
    const elementoMensagemDeErro = document.getElementById('error-message');
    elementoMensagemDeErro.textContent = mensagem;
    elementoMensagemDeErro.style.display = 'block'; // Torna a mensagem visível
}

document.getElementById('contact-form').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value; // Obtém o valor do campo de nome
    const telefone = document.getElementById('numero').value; // Obtém o valor do campo de telefone

    const contagemDePalavras = nome.trim().split(/\s+/).length; // Conta o número de palavras no nome

    if (nome && telefone) { // Verifica se ambos os campos foram preenchidos
        if (contagemDePalavras >= 2) { // Verifica se o nome tem pelo menos 2 palavras
            if (!numerosDeTelefone.includes(telefone)) { // Verifica se o telefone já foi cadastrado
                const tabela = document.getElementById('contato-da-tabela'); // Obtém o corpo da tabela
                const novaLinha = tabela.insertRow(); // Insere uma nova linha na tabela

                const celulaNome = novaLinha.insertCell(0); // Insere uma nova célula na primeira posição da nova linha
                const celulaTelefone = novaLinha.insertCell(1); // Insere uma nova célula na segunda posição da nova linha

                celulaNome.textContent = nome; // Define o conteúdo da célula de nome
                celulaTelefone.textContent = telefone; // Define o conteúdo da célula de telefone

                numerosDeTelefone.push(telefone); // Adiciona o telefone ao array de números de telefone cadastrados

                document.getElementById('contact-form').reset(); // Reseta o formulário
                exibirMensagemDeErro(''); // Limpa a mensagem de erro, se houver
            } else {
                exibirMensagemDeErro('Este número de telefone já foi cadastrado.'); // Exibe mensagem de erro
            }
        } else {
            exibirMensagemDeErro('O nome deve conter 1 sobrenome.'); // Exibe mensagem de erro
        }
    } else {
        exibirMensagemDeErro('Por favor, preencha ambos os campos.'); // Exibe mensagem de erro
    }
});
