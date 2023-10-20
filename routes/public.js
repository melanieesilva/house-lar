const express = require('express')
const router = express.Router()


router.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));

router.get('/perfilUsuario',function(req,res){
    res.render('pages/perfilUsuario.handlebars')
})

router.get('/sobrenos',function(req,res){
    res.render('pages/sobrenos.handlebars')
})

router.get('/noticias',function(req,res){
    res.render('pages/Noticias/noticias.handlebars')
})

router.get('/artigoNoticia',function(req,res){
    res.render('pages/Noticias/artigoNoticia.handlebars')
})

router.get('/faleConosco',function(req,res){
    res.render('pages/faleConosco.handlebars')
})

router.get('/detalheImovel',function(req,res){
    res.render('pages/detalheImovel.handlebars')
})

router.get('/buscaAvancada',(req,res)=> res.render('pages/buscaAvancada.handlebars'));

// PUBLICAR IMÓVEL CLIENTE
router.get('/publicarImovelCliente',(req,res) => res.render(
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

router.get('/loginCorretor',function(req,res){
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