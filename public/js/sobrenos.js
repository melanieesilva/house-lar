// // Imprime todas as classes criadas no HTML para facilitar no documento CSS
// const elementosDoc = document.querySelectorAll('*');

// elementosDoc.forEach(elemento =>{
//     const classeElemento = Array.from(elemento.classList);

//     if(classeElemento.length > 0){
//         console.log(`Classes criadas: ${classeElemento} `)
//     }
// })

var posicaoSlide = 1;
showSlide(posicaoSlide);

function addSlide(n) {
  showSlide(posicaoSlide += n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("div-feedback");

  if (n > slide.length) {posicaoSlide = 1}
  if (n < 1) {posicaoSlide = slide.length}
  
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[posicaoSlide-1].style.display = "flex";
}