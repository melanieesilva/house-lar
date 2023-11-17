document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const titulo = document.querySelector('[name="titulo_noticia"]').value;

    // Use essas variáveis para enviar os dados para o servidor
    // Você pode usar fetch ou outra biblioteca para enviar uma solicitação POST ao servidor
});
