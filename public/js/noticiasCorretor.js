// sessions

openViewNoticia(0)

function openViewNoticia(el){
    const publicados = document.getElementById("sessionPublicados")
    const desativados = document.getElementById("sessionDesativados")
    const spanPublicados = document.getElementById("totalPublicadas")
    const spanDesativados = document.getElementById("totalDesativadas")
    const sectionPublicados = document.getElementById("noticiasPublicadasID")
    const sectionDesativados = document.getElementById("noticiasDesativadasID")

    switch(el){
        case 0:
            sectionPublicados.style.display = "flex"
            publicados.style.color = "black"
            publicados.style.borderBottom = "3px solid #9D0058"
            spanPublicados.style.backgroundColor = "#FFE9F5"
            spanPublicados.style.color = "#9D0058"
        break;
        case 1:
            sectionPublicados.style.display = "flex"
            publicados.style.color = "black"
            publicados.style.borderBottom = "3px solid #9D0058"
            spanPublicados.style.backgroundColor = "#FFE9F5"
            spanPublicados.style.color = "#9D0058"

            sectionDesativados.style.display = "none"
            desativados.style.color = "#767676"
            desativados.style.borderBottom = "none"
            spanDesativados.style.backgroundColor = "#F3F3F3"
            spanDesativados.style.color = "#6C6C6C"
        break;
        case 2:
            sectionDesativados.style.display = "flex"
            desativados.style.color = "black"
            desativados.style.borderBottom = "3px solid #9D0058"
            spanDesativados.style.backgroundColor = "#FFE9F5"
            spanDesativados.style.color = "#9D0058"

            sectionPublicados.style.display = "none"
            publicados.style.color = "#767676"
            publicados.style.borderBottom = "none"
            spanPublicados.style.backgroundColor = "#F3F3F3"
            spanPublicados.style.color = "#6C6C6C"
        break;
    }

}

function openBodyDrop(event){
    console.log(event.target.children)
    const main = document.getElementsByClassName("main")
    const dropMore = document.getElementById("moreDrop")
    const bodyDrop = document.getElementById("bodyDrop")

    bodyDrop.style.display = "flex"

    dropMore.onclick = function(event) {
        if (bodyDrop.style.display == "flex") {
          bodyDrop.style.display = "none";
        }
        else{
            bodyDrop.style.display = "flex"
        }
      }
    
}