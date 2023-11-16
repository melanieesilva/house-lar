document.addEventListener("DOMContentLoaded", function () {
  const botaoBranco = document.getElementById("compra");
  const botaoCinza = document.getElementById("alugar");
  botaoBranco.classList.add("ativo");
  document.getElementById('operacao').value = 'Venda';

  botaoCinza.addEventListener("click", function () {
    console.log("Clique no botão Aluguel");
    botaoBranco.classList.remove("ativo");
    botaoCinza.classList.add("ativo");
    document.getElementById('operacao').value = 'Aluguel';
    console.log("Valor da operação:", document.getElementById('operacao').value);
  });

  botaoBranco.addEventListener("click", function () {
    botaoCinza.classList.remove("ativo");
    botaoBranco.classList.add("ativo");
    document.getElementById('operacao').value = 'Venda';
    console.log("Valor da operação:", document.getElementById('operacao').value);
  });
});
