let caixa = document.getElementsByClassName("editar-perfil");

function mostrarEdicao(){
    document.getElementById("conteiner").style.display = "none";
    for(i = 0; i < caixa.length; i++) {
        caixa[i].style.display = 'block';
    }
    //document.getElementById("editar_perfil").style.display = "block";
    return false;
}

function esconderEdicao(){
    document.getElementById("conteiner").style.display = "block";
    for(i = 0; i < caixa.length; i++) {
        caixa[i].style.display = 'none';
    }
    //document.getElementById("conteiner").style.display = "block";  
    return false;
}