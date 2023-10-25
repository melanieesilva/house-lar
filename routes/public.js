const express = require('express')
const router = express.Router()
const Duvidas = require('../models/Duvidas')
const Noticia = require('../models/Noticias')

router.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));


router.get('/public/sobrenos',function(req,res){
    res.render('pages/sobrenos.handlebars')
})

router.get('/public/noticias',function(req,res){
    res.render('pages/Noticias/noticias.handlebars')
})

router.get('/public/artigoNoticia',function(req,res){
    res.render('pages/Noticias/artigoNoticia.handlebars')
})

router.get('/public/faleConosco',function(req,res){
    res.render('pages/faleConosco.handlebars')
})

router.get('/public/detalheImovel',function(req,res){
    res.render('pages/detalheImovel.handlebars')
})

//Enviar dúvida
router.post('/public/EnviarDuvida', async (req,res)=>{
    try {
        // Obtenha os dados do formulário a partir de req.body
        const { nome_cliente, email_cliente, telefone_cliente, mensagem_cliente } = req.body;

        // Enviar uma dúvida usando o modelo
        await Duvidas.create({
            nome_cliente: nome_cliente,
            email_cliente: email_cliente,
            telefone_cliente: telefone_cliente,
            mensagem_cliente: mensagem_cliente
        });

        res.redirect('/corretor/mensagens'); // Redirecione para a página inicial ou para onde desejar
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao enviar sua dúvida.');
    }
})

router.get('/public/buscaAvancada',(req,res)=> res.render('pages/buscaAvancada.handlebars'));

// PUBLICAR IMÓVEL CLIENTE
router.get('/public/publicarImovelCliente',(req,res) => res.render(
'pages/PublicarImovelCliente/publicarImovelCliente.handlebars'));

// router.get('/publicarImovel2',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel2.handlebars'));

// router.get('/publicarImovel3',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel3.handlebars'));

// router.get('/publicarImovel4',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel4.handlebars'));

// router.get('/publicarImovel5',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel5.handlebars'));

// router.get('/publicarImovel6',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel6.handlebars'));

// router.get('/publicarImovel7',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel7.handlebars'));

// router.get('/publicarImovel8',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel8.handlebars'));

// router.get('/publicarImovel9',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel9.handlebars'));

// router.get('/publicarImovel10',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel10.handlebars'));

// router.get('/publicarImovel11',(req,res) => res.render(
//     'pages/PublicarImovelCliente/publicarImovel11.handlebars'));

router.get('/public/loginCorretor',function(req,res){
    res.render('pages/loginCorretor.handlebars',{
        layout: '',
        pageTitle: 'Login Imobiliária'
    })
})

router.post('/autenticar',(req,res)=>{
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

router.post('/')

// Login Corretor - Esqueceu a Senha

router.get('/esqueceuSenha', function (req,res){
    res.render('pages/EsqueceuSenha/esqueceuSenha');
});

router.get('/esqueceuSenha2', function (req,res){
    res.render('pages/EsqueceuSenha/esqueceuSenha2');
});

router.get('/esqueceuSenha3', function (req,res){
    res.render('pages/EsqueceuSenha/esqueceuSenha3');
});
























module.exports = router