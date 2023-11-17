function darFiltro(){
    //transforma display em grid para que a caixa de confirmação apareça
    document.getElementById("confirmacao").style.display = "grid";

    //desabilita o botão de redefinir senha
    document.querySelector('#botao-redefinir').disabled = true;
    
    //Desabilita a anchor de voltar para a página de login
    document.getElementById("anchor1").style.pointerEvents="none";
    document.getElementById("anchor1").style.cursor="default";

    //Borra toda a página exceto a caixa de confirmação de alteração de senha (e o header e o footer)
    document.getElementById("borrar").style.filter = 'blur(3px)';
}