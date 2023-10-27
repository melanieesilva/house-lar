const express = require('express')
const router = express.Router()
const Duvidas = require('../models/Duvidas')
const Noticia = require('../models/Noticias')
const multer = require('multer')

//MODELOS
const Solicitacao = require('../models/Solicitacoes');
const Imagem_Solicitacao = require('../models/Imagens_Solicitacoes')
//CONTROLLERS
const solicontrol = require('../controllers/solicitacoesController')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "C:/Users/melan/Documents/GitHub/house-lar/public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

const uploadMulter = multer({
    storage: storage
}).array("images")

router.get('/', (req, res) => res.render('pages/paginaInicial.handlebars'));


router.get('/public/sobrenos', function (req, res) {
    res.render('pages/sobrenos.handlebars')
})

router.get('/public/noticias', function (req, res) {
    res.render('pages/Noticias/noticias.handlebars')
})

router.get('/public/artigoNoticia', function (req, res) {
    res.render('pages/Noticias/artigoNoticia.handlebars')
})

router.get('/public/faleConosco', function (req, res) {
    res.render('pages/faleConosco.handlebars')
})

router.get('/public/detalheImovel', function (req, res) {
    res.render('pages/detalheImovel.handlebars')
})

//Enviar dúvida
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

        res.redirect('/corretor/mensagens'); // Redirecione para a página inicial ou para onde desejar
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao enviar sua dúvida.');
    }
})

router.get('/public/buscaAvancada', (req, res) => res.render('pages/buscaAvancada.handlebars'));

// PUBLICAR IMÓVEL CLIENTE
router.get('/public/publicarImovelCliente', (req, res) => res.render(
    'pages/PublicarImovelCliente/publicarImovelCliente.handlebars'));

router.post('/public/publicarSolicitacao', uploadMulter, (req, res) => {
    //adquiro todos os inputs normais
    //adquiro as imagens
    //filtro as imagens
    //defino o caminho da imagem
    //cadastro solicitação
    //cadastro imagem

    try {
        const {
            nomeUser,
            email,
            cpf,
            telefone,
            operacao,
            tipoImovel,
            numQuartos,
            numBanheiros,
            numVagas,
            tamArea,
            construcaoImovel,
            condominioImovel,
            andaresImovel,
            dataEntrega,
            valorImovel,
            valorCondominio,
            valorIPTU,
            parcelaIPTU,
            cidade,
            bairro,
            endereco,
            numero,
            descricao,
            indexImagemRemovida
        } = req.body

        const imagensEnviadas = req.files;
        const indexesRemovidos = indexImagemRemovida.split(',').map(index => parseInt(index, 10));

        const imagensSelecionadas = imagensEnviadas.filter((file, index) => {
            return !indexesRemovidos.includes(index);
        });


        solicontrol.cadastrarSolicitacao(
            tipoImovel,
            operacao,
            descricao,
            numQuartos,
            numBanheiros,
            numVagas,
            tamArea,
            valorImovel,
            valorCondominio,
            valorIPTU,
            parcelaIPTU,
            construcaoImovel,
            andaresImovel,
            dataEntrega,
            condominioImovel,
            nomeUser,
            telefone,
            email,
            cpf,
            cidade,
            bairro,
            endereco,
            numero,
        ).then((solicitacao)=>{
            for (const img of imagensSelecionadas) {
                cadastrarImagens(solicitacao.id,img.originalname,img.path)
                
            }
            res.json({ message: " solicitação criada e imagens enviadas" })
        }).catch((erro)=>{
            console.log("ERRO: "+erro)
        })

    } catch (error) {
        console.log("Não foi possível efetuar o comando", error)
        res.json({ erro: "errado" })
    }
})


router.get('/public/loginCorretor', function (req, res) {
    res.render('pages/loginCorretor.handlebars', {
        layout: '',
        pageTitle: 'Login Imobiliária'
    })
})

router.post('/autenticar', (req, res) => {
    Usuario.findOne({
        where: {
            Email: req.body.email,
            Senha: req.body.senha
        }
    }).then((user) => {
        console.log(user instanceof Usuario)
        console.log(user.Email)
    }).catch((err) => {
        console.log("NÃO FOI POSSÍVEL FAZER A BUSCA: " + err)
    })
})

router.post('/')

// Login Corretor - Esqueceu a Senha

router.get('/esqueceuSenha', function (req, res) {
    res.render('pages/EsqueceuSenha/esqueceuSenha');
});

router.get('/esqueceuSenha2', function (req, res) {
    res.render('pages/EsqueceuSenha/esqueceuSenha2');
});

router.get('/esqueceuSenha3', function (req, res) {
    res.render('pages/EsqueceuSenha/esqueceuSenha3');
});









// const solicontrol = require('../controllers/solicitacoesController')

// const pathImg = 'C:/Users/melan/Documents/GitHub/house-lar/public/img';

// solicontrol.cadastrarSolicitacao('Solicitado','Apartamento','Venda','Olá, sou describe',2,
// 2,4,84,200.000,650,485.9,4,'Não',2,'2023-01-02','Não','Miriam Novaes','(71)98539-9616','mirian@gmail.com',
// '741.258.963-99','Salvador','Pituba','Rua dos Vereadores',44)
// .then((solicitacao)=>{
//     solicontrol.cadastrarImagens(solicitacao.id,'img-card-imovel.jfif',pathImg)
// }).catch((erro)=>{
//     console.log("Não foi possível criar imagem. O erro: "+erro)
// })











module.exports = router