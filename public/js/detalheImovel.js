let aux = [];

function abrirMapa() {
    const mapa = document.getElementById('mapaContainer');
    const areaMapa = document.getElementById('area-mapa')

    mapa.style.display = "block"
    setTimeout(() => {
        areaMapa.style.width = "50%";
        aux[0] = 1;

    }, 2)

    window.addEventListener('click', (event) => {
        if (event.target == mapaContainer) {
            mapa.style.display = "none";
        }
        aux[1] = 2;
    })


    if (aux[0] === 1 && aux[1] === 2) {
        areaMapa.style.width = "0%";
    }
}

function verImagens() {
    const containerModal = document.getElementById('modalImagens')

    containerModal.style.display = "flex"
    window.addEventListener('click', (event) => {
        if (event.target == modalImagens) {
            containerModal.style.display = "none";
        }
    })
}


const botaoCarrossel = document.getElementById('botoesControl');
const botaoSlide = document.getElementById('botoesSlide');
const divCarrossel = document.querySelector('blocoImagens')



// divCarrossel.forEach(div =>{
//     div.addEventListener('click',console.log("olaaa"))
// })

divCarrossel.addEventListener('click',({ target })=>{
    target.addEventListener('click',() => {
        console.log("oi");
    })

})



var posicaoCarrossel = 1;
var posicaoSlide = 1;
showCarrossel(posicaoCarrossel);
showSlide(posicaoSlide);

function addCarrossel(n) {
    showCarrossel(posicaoCarrossel += n);
}

function addSlide(n){
    showSlide(posicaoSlide += n);
}

function slideAtual(n){
    showSlide(posicaoSlide = n)
}

function showCarrossel(n) {
    var i;
    var bloco = document.getElementsByClassName("bloco-imagens");

    if (n > bloco.length) { posicaoCarrossel = 1 }
    if (n < 1) { posicaoCarrossel = bloco.length }

    for (i = 0; i < bloco.length; i++) {
        bloco[i].style.display = "none";
    }


    if (posicaoCarrossel === 1) {
        botaoCarrossel.children[0].style.display = "none";
    }else{
        botaoCarrossel.children[0].style.display = "flex";
    }
    bloco[posicaoCarrossel - 1].style.display = "flex";
}

function showSlide(n){
    var i;
    var slide = document.getElementsByClassName("imagem-slide");

    if (n > slide.length) { posicaoSlide = 1 }
    if (n < 1) { posicaoSlide = slide.length }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }


    if (posicaoSlide === 1) {
        botaoSlide.children[0].style.display = "none";
    }else{
        botaoSlide.children[0].style.display = "flex";
    }
    slide[posicaoSlide - 1].style.display = "flex";
}