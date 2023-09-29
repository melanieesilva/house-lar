
//Inicializando express
const express = require('express')
const app = express()


//Configurando handlebars e layouts
const handlebars = require('express-handlebars')

// Layout principal
app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

// Layout painel de controle
app.get('/painelControle', (req,res) => {
    res.render('pages/imoveisPublicados', {
        layout: 'painelControle',
        pageTitle: 'Painel de Controle'
    });
});



app.use(express.static('public'))


//Configurando body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Rotas
// Usuário final 
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

app.get('/detalheImovel',function(req,res){
    res.render('pages/detalheImovel.handlebars')
})

// Corretor - Painel de Controle

app.get('/calendario', (req,res) => {
    res.render('pages/calendario.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Calendário - Painel De Controle'
    })
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