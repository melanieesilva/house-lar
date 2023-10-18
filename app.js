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
app.use(bodyParser.urlencoded({extended:true}));

//Importando Model
const Usuario = require('./Models/Usuario')


// Rotas
// Usuário final 
app.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));

app.get('/perfilUsuario',function(req,res){
    res.render('pages/perfilUsuario.handlebars')
})

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

app.get('/buscaAvancada',(req,res)=> res.render('pages/buscaAvancada.handlebars'));

// PUBLICAR IMÓVEL CLIENTE
app.get('/publicarImovelCliente',(req,res) => res.render(
'pages/PublicarImovelCliente/publicarImovelCliente.handlebars'));

app.get('/publicarImovel2',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel2.handlebars'));

app.get('/publicarImovel3',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel3.handlebars'));

app.get('/publicarImovel4',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel4.handlebars'));

app.get('/publicarImovel5',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel5.handlebars'));

app.get('/publicarImovel6',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel6.handlebars'));

app.get('/publicarImovel7',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel7.handlebars'));

app.get('/publicarImovel8',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel8.handlebars'));

app.get('/publicarImovel9',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel9.handlebars'));

app.get('/publicarImovel10',(req,res) => res.render(
    'pages/PublicarImovelCliente/publicarImovel10.handlebars'));

app.get('/loginCorretor',function(req,res){
    res.render('pages/loginCorretor.handlebars',{
        layout: '',
        pageTitle: 'Login Imobiliária'
    })
})

app.post('/autenticar',(req,res)=>{
    Usuario.findOne({
        where:{
            Email: req.body.email,
            Senha: req.body.senha
        }
    }).then((user)=>{
       console.log(user instanceof Usuario)
       console.log(user.Email)
    }).catch((err)=>{
        console.log("NÃO FOI POSSÍVEL FAZER A BUSCA: "+err)
    })
})

// Login Corretor - Esqueceu a Senha

app.get('/esqueceuSenha', function (req,res){
    res.render('pages/EsqueceuSenha/esqueceuSenha');
});

app.get('/esqueceuSenha2', function (req,res){
    res.render('pages/EsqueceuSenha/esqueceuSenha2');
});

app.get('/esqueceuSenha3', function (req,res){
    res.render('pages/EsqueceuSenha/esqueceuSenha3');
});

// Corretor - Painel de Controle

app.get('/calendario', (req,res) => {
    res.render('pages/calendario.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Calendário - Painel De Controle'
    })
})

app.get('/noticiasCorretor', (req,res) => {
    res.render('pages/noticiasCorretor.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Notícias - Painel De Controle'
    })
})

app.get('/solicitacoes', (req,res)=>{
    res.render('pages/solicitacoes.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Solicitações - Painel de Controle'
    })
})

app.get('/mensagens', (req,res)=>{
    res.render('pages/Mensagens/mensagens.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Mensagens - Painel de Controle'
    })
})

app.get('/viewMensagem',(req,res)=>{
    res.render('pages/Mensagens/viewMensagem.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Visualização Mensagem - Painel de Controle'
})
})

app.get('/publicarImovelCorretor',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publicarImovelCorretor.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor2',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor2.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor3',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor3.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor4',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor4.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor5',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor5.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor6',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor6.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor7',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor7.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor8',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor8.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor9',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor9.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
})
})

app.get('/publiImovelCorretor10',(req,res)=>{
    res.render('pages/PublicarImovelCorretor/publiImovelCorretor10.handlebars',{
        layout: 'painelControle',
        pageTitle: 'Publicar Imóvel - Painel de Controle'
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

const mensagem = "Olá";

module.exports = mensagem;


app.listen(8080,function(){
    
    console.log("Servidor iniciado na url http://localhost:8080")
})