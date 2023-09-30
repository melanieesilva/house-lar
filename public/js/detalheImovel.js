let aux = [];

function abrirMapa() {
    const mapa = document.getElementById('mapa');
    const areaMapa = document.getElementById('area-mapa')
    const blur = document.getElementById('blur')

    mapa.style.display = "block"
    setTimeout(()=>{
        areaMapa.style.width = "50%";
        aux[0] = 1;

    },2)

    blur.addEventListener('click',()=>{
        mapa.style.display = "none";
        aux[1] = 2;
    })


    if (aux[0] === 1 && aux[1] === 2) {
        areaMapa.style.width = "0%";
    }
}