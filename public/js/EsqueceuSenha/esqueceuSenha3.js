const divisoes = document.getElementsByTagName("div");
let confirmar = document.getElementById("confirmacao");

function darFiltro(){
    //transforma display em grid para que a caixa de confirmação apareça
    document.getElementById("confirmacao").style.display = "grid";

    //desabilita o botão de redefinir senha
    document.querySelector('#botao-redefinir').disabled = true;
    
    //Desabilita a anchor de voltar para a página de login
    document.getElementById("anchor1").style.pointerEvents="none";
    document.getElementById("anchor1").style.cursor="default";

    //Precisa de uma estilização que coloque o efeito abaixo em toda a tela, exceto na div de confirmação
    //divisoes[i].style.filter = "blur(3px)"
}