function ativarBotao(){
    if((document.getElementById("email") === document.activeElement) || (document.getElementById("sms") === document.activeElement) || (document.getElementById("botao-enviar") === document.activeElement)){
        //Ativar âncora
        document.getElementById("ancora").style.pointerEvents = "auto";
        //Alterar estilização do botão
        document.getElementById("botao-enviar").style.background = "#9D0058";
        document.getElementById("botao-enviar").style.color = "#FFFFFF";
    }else{
        //Desligar âncora novamente
        document.getElementById("ancora").style.pointerEvents = "none";
        //Reverter estilização do botão
        document.getElementById("botao-enviar").style.background = "#A8A8A8";
        document.getElementById("botao-enviar").style.color = "#DDDDDD";     
    }
}

setInterval(ativarBotao, 10);