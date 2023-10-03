let aux = [];

function abrirMapa() {
    const mapa = document.getElementById('mapaContainer');
    const areaMapa = document.getElementById('area-mapa')

    mapa.style.display = "block"
    setTimeout(()=>{
        areaMapa.style.width = "50%";
        aux[0] = 1;

},2)

    window.addEventListener('click',(event)=>{
        if(event.target == mapaContainer){
            mapa.style.display = "none";
        }
        aux[1] = 2;
    })


    if (aux[0] === 1 && aux[1] === 2) {
        areaMapa.style.width = "0%";
    }
}

function verImagens(){
    const containerModal = document.getElementById('modalImagens')

    containerModal.style.display = "flex"
    window.addEventListener('click',(event)=>{
        if(event.target == modalImagens){
            containerModal.style.display = "none";
        }
    })
}




var posicaoSlide = 1;
showSlide(posicaoSlide);

function add(n) {
  showSlide(posicaoSlide += n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("bloco");

  if (n > slide.length) {posicaoSlide = 1}
  if (n < 1) {posicaoSlide = slide.length}
  
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[posicaoSlide-1].style.display = "flex";
}