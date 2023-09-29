function abrirMapa() {
    const mapa = document.getElementById('mapa');
    const areaMapa = document.getElementById('area-mapa')
    const blur = document.getElementById('blur')

    mapa.style.display = "block"
    setTimeout(()=>{
        areaMapa.style.width = "50%";
    },2)

    blur.addEventListener('click',()=>{
        mapa.style.display = "none";
    })
}