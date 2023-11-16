document.addEventListener("DOMContentLoaded", function () {
    const botaoBranco = document.getElementById("compra");
    const botaoCinza = document.getElementById("alugar");
    botaoBranco.classList.add("ativo");
  
    botaoCinza.addEventListener("click", function () {
      botaoBranco.classList.remove("ativo");
      botaoCinza.classList.add("ativo");
    });
  
    botaoBranco.addEventListener("click", function () {
      botaoCinza.classList.remove("ativo");
      botaoBranco.classList.add("ativo");
    });
  });
  