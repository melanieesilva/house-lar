const hamburguer = document.querySelector(".hamburguer")
const navList = document.querySelector(".nav-lista")

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('active')
    navList.classList.toggle('active')
})











//teste google


// import { createRequire } from 'module'
// const require = createRequire(import.meta.url);

// const translate = require('google-translate');

// const conteudoPagina = document.body.innerText;
// var text = "olá";


// const btn = document.getElementById('btn-traduzir')


// function traduzirPagina(){
//     translate(text,'en',function(err, translation){
//         console.log("Inglês :>",translation.translatedText);
//         // var paginaTraduzida = translation.translatedText;
//         // document.body.innerText = paginaTraduzida;
//     });
//     console.log("traduzido")
// }

// btn.addEventListener('click',traduzirPagina)
