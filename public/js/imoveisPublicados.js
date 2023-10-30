 
// IMÓVEIS PUBLICADOS

document.addEventListener("DOMContentLoaded", function () {
    const botaorosio = document.getElementById("pub");
    const botaoCinza = document.getElementById("des");
    const publicado = document.getElementById("publicados");
    const desativado = document.getElementById("desativados");

    botaoCinza.addEventListener("click", function () {
        botaorosio.classList.remove("ativo");
        publicado.style.display="none";
      botaoCinza.classList.add("ativo");
      desativado.style.display="block";
    });
// document.addEventListener("DOMContentLoaded", function () {
//     const botaorosio = document.getElementById("pub");
//     const botaoCinza = document.getElementById("des");
//     const publicado = document.getElementById("publicados");
//     const desativado = document.getElementById("desativados");

//     botaoCinza.addEventListener("click", function () {
//         botaorosio.classList.remove("ativo");
//         publicado.style.display="none";
//       botaoCinza.classList.add("ativo");
//       desativado.style.display="block";
//     });
  
    botaorosio.addEventListener("click", function () {
      botaoCinza.classList.remove("ativo");
      desativado.style.display="none";
      botaorosio.classList.add("ativo");
      publicado.style.display="block";
    });
  });
//     botaorosio.addEventListener("click", function () {
//       botaoCinza.classList.remove("ativo");
//       desativado.style.display="none";
//       botaorosio.classList.add("ativo");
//       publicado.style.display="block";
//     });
//   });