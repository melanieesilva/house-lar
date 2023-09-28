
//Inicializando express
const express = require('express')
const app = express()


//Configurando handlebars
const handlebars = require('express-handlebars')

app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))


//Configurando body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Rotas

app.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));

app.get('/sobrenos',function(req,res){
    res.render('pages/sobrenos.handlebars')
})

app.get('/noticias',function(req,res){
    res.render('pages/Noticias/noticias.handlebars')
})

app.get('/artigoNoticia',function(req,res){
    res.render('pages/Noticias/artigoNoticia.handlebars')
})

app.get('/faleConosco',function(req,res){
    res.render('pages/faleConosco.handlebars')
})






// //google

// const API_KEY = "AIzaSyDdAjyOOuBbhIL4T8jxMHRwoYXsEgPrbn4";

// const axios = require('axios')

// async translate(text){
//     let res = await axios.post(
//     `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//     { q: text, target: "tr" }
//     );
//     let translation = res.data.data.translations[0].translatedText;
//     return translation;
// }

// var msg = "Azul";








app.listen(8080,function(){
    
    console.log("Servidor iniciado na url http://localhost:8080")
})