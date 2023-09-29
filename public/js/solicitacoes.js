var modal = document.getElementById("modalBackground");
var fecharBotao = document.getElementById("fecharModal");

// Quando o usuário clicar em .res, mostra o modal
document.querySelectorAll(".res").forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        modal.style.display = "flex"; // Exibe o modal
        document.body.style.overflow = "hidden"
    });
});

// Quando o usuário clicar no botão de fechar, fecha o modal
fecharBotao.addEventListener("click", function() {
    modal.style.display = "none"; // Esconde o modal
    document.body.style.overflow = "visible";
});

// Fecha o modal se o usuário clicar fora do modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Esconde o modal
        document.body.style.overflow = "visible";
    }
});

const carrossel = document.querySelector(".carrossel");
const anteriorBtn = document.querySelector("#anterior");
const proximoBtn = document.querySelector("#proximo");

let slideIndex = 0;

function mostrarSlide(index) {
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

anteriorBtn.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + 3) % 3;
    mostrarSlide(slideIndex);
});

proximoBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % 3;
    mostrarSlide(slideIndex);
});