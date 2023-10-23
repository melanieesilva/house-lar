document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    const publishButton = document.querySelector("#bp");

    const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };

    openModalButton.addEventListener("click", (e) => {
        e.preventDefault(); // Impede a ação padrão do botão
        toggleModal();
    });

    [closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });

    // Impedir o envio do formulário quando o botão de fechar do modal for clicado
    closeModalButton.addEventListener("click", (e) => {
        e.preventDefault();
    });

    // Adicionar um ouvinte de eventos para o botão "Publicar"
    publishButton.addEventListener("click", () => {
        // Adicione qualquer ação necessária quando o botão "Publicar" for clicado
        // Exemplo: document.forms[0].submit();
    });
});

function mostrarNome(valor) {
    nomearquivo = valor.split('\\').pop().split('/').pop();

    var spanElement = document.getElementById("file-name");

    spanElement.textContent = "A foto selecionado foi " + nomearquivo;
}
