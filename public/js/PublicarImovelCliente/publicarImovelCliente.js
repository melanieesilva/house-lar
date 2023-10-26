console.log("conectado")

const inputFile = document.getElementById("inputFile")
const btnSub = document.getElementById("btnsub")

document.addEventListener('DOMContentLoaded',function carregarFormulario(){

inputFile.addEventListener('change',(event)=>{
    const imagesPreview = document.getElementById("containerImg")
    const imagesUpload = [];

    console.log("ouviu")

    for(let i = 0;i < event.target.files.length;i++){
        //obtenha cada file
        const file = event.target.files[i]

        //inicie o reader
        const reader = new FileReader()

        reader.onload = (e) =>{
            const img = new Image()
            img.src = e.target.result
            const src = img.src

            const BtnDelete = document.createElement("button")

            const icon = document.createElement("iconify-icon")
            icon.setAttribute('icon','mdi:remove')
            BtnDelete.appendChild(icon)
            BtnDelete.className = "btndelete"

            const imgPreview = document.createElement("div")
            imgPreview.className = "imgpreview"

            imgPreview.appendChild(BtnDelete)
            imgPreview.style.backgroundImage = `url(${src})`
            imagesPreview.appendChild(imgPreview)

            imagesUpload.push(file)
            
            BtnDelete.addEventListener('click',()=>{
                imagesPreview.removeChild(imgPreview)

                const index = imagesUpload.indexOf(file)
                if(index !== -1){
                    imagesUpload.splice(index,1)
                    console.log(imagesUpload)
                }
            })
        }
        reader.readAsDataURL(file);
    }


})



console.log("DOMContentLoaded")

})

function openPreView(){
    const modal = document.getElementById("preVisualizacao")
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"
}



