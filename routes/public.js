// CARREGANDO MÓDULOS
const express = require('express')
const router = express.Router()
const multer = require('../config/multerConfig')

//MODELOS
const Solicitacao = require('../models/Solicitacoes');
const Imagem_Solicitacao = require('../models/Imagens_Solicitacoes')
const Duvidas = require('../models/Duvidas')
const Noticia = require('../models/Noticias')
const Cliente = require('../models/Clientes')
//CONTROLLERS
const solicontrol = require('../controllers/solicitacoesController')
const noticiasControl = require('../controllers/noticiasController')
const imoveisController = require('../controllers/imoveisController')

//MIDDLEWARE
router.use((req, res, next) => {
    res.locals.layout = 'main'
    res.locals.pageTitle = 'House&Lar'
    next()
})

router.get('/', (req, res) => res.render('pages/paginaInicial'));

router.get('/public/sobrenos', function (req, res) {
    res.render('pages/sobrenos')
})

router.get('/public/noticias', function (req, res) {
    res.render('pages/Noticias/noticias')
})

router.get('/public/exibirArtigo/:id', noticiasControl.getNoticia)


router.get('/public/faleConosco', function (req, res) {
    res.render('pages/faleConosco.handlebars')
})

router.get('/public/detalheImovel/:id', imoveisController.getDetalheImovel)

router.post('/public/EnviarDuvida', async (req, res) => {
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

        res.redirect('/'); // Redirecione para a página inicial ou para onde desejar
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao enviar sua dúvida.');
    }
})

router.get('/public/buscaAvancada', imoveisController.getImoveisSelecionados);
router.post('/public/buscaAvancada', imoveisController.getBuscaAvancada);

router.get('/public/publicarImovelCliente', (req, res) => res.render('pages/publicarImovelCliente'));

router.post('/public/publicarSolicitacao', multer.uploadArray, solicontrol.cadastrarSoli)

router.get('/public/loginCorretor', function (req, res) {
    res.render('pages/loginCorretor.handlebars', {
        layout: '',
        pageTitle: 'Login Imobiliária'
    })
})

router.post('/public/autenticar', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const cliente = await Cliente.findOne({
            where: {
                email_cliente: email
            }
        });
        const senhaCorreta = await Cliente.findOne({
            where: {
                senha_cliente: senha
            }
        })

        if (!cliente) {
            return res.status(401).send('Credenciais inválidas: E-mail');
        } else if (!senhaCorreta) {
            return res.status(401).send('Credenciais inválidas: Senha');
        }
        res.redirect('/corretor/painelControle');
    } catch (error) {
        console.error(error); // Adicione esta linha para ver o erro no console
        console.log(email, senha);
        res.status(500).send('Ocorreu um erro ao autenticar o cliente: ' + error.message); // Envie a mensagem de erro real para o cliente
    }

});

router.get('/public/esqueceuSenha', function (req, res) {
    res.render('pages/EsqueceuSenha/esqueceuSenha');
});

router.get('/public/esqueceuSenha2', function (req, res) {
    res.render('pages/EsqueceuSenha/esqueceuSenha2');
});

router.get('/public/esqueceuSenha3', function (req, res) {
    res.render('pages/EsqueceuSenha/esqueceuSenha3');
});




module.exports = router