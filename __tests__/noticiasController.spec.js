const fs = require('fs') //Leitura e escrita de arquivos
const request = require("supertest")
const noticiasController = require('../controllers/noticiasController')
const Noticias = require('../models/Noticias')
const app = require('../server')

jest.mock('../models/Noticias')


describe("Notícias Controller", () => {
    beforeAll(done => {
        done()
    })
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("Deve acessar rota publicar notícia", async ()=>{
        const res = await request(app).get('/corretor/publicarNoticia')
        
        // console.log(res)
        expect(res.statusCode).toEqual(200)
    }),
    test("Deve cadastrar notícia com sucesso através da controller", async () => {
        //Configurando mock de imagem
        const path = 'C:/Users/melan/Documents/GitHub/house-lar/public/img/img-card-imovel.jfif';
        const imgBuffer = fs.readFileSync(path);

        //Criando um mock de notícia
        const dataNoticia = {
            titulo_noticia: 'Novo condomínio Village Emperial na Pituba',
            descricao_noticia: 'Empreendimento moderno, conta com portaria monitorada por robôs...',
            artigo_noticia: 'Artigo da notícia...',
            autor_noticia: 'Islania Silva',
            publicado_por: "House&Lar",
            nome_imagem: 'img-card-imovel.jfif',
            data_imagem: imgBuffer,
            nome_categoria: 'Nome da Categoria',
            cor_categoria: 'Cor da Categoria',
            status: 'Publicada',
        }

        Noticias.create.mockResolvedValue(dataNoticia);

        const noticiaCriada = await noticiasController.publicarNoticia(
            dataNoticia.titulo_noticia,
            dataNoticia.descricao_noticia,
            dataNoticia.artigo_noticia,
            dataNoticia.autor_noticia,
            dataNoticia.publicado_por,
            dataNoticia.nome_imagem,
            dataNoticia.data_imagem,
            dataNoticia.nome_categoria,
            dataNoticia.cor_categoria,
            dataNoticia.status
        );

        expect(noticiaCriada).toEqual(dataNoticia);

    }),
    test("Deve lançar um erro ao tentar publicar uma notícia com paramêtros inválidos", async ()=>{
        try {
            await noticiasController.publicarNoticia(null, null, null, null, null, null, null, null, null, 'Publicada');
          } catch (error) {
            expect(error.message).toBe('Não foi possível criar a notícia.');
          }
    }),
    // test("Deve publicar notícia com sucesso pela rota de Cadastrar Notícia", async ()=>{
    //     const path = 'C:/Users/melan/Documents/GitHub/house-lar/public/img/img-card-imovel.jfif';
    //     const imgBuffer = fs.readFileSync(path);

    //     const res = await request(app).post('/corretor/CadastrarNoticia').send({
    //         titulo_noticia: 'Novo condomínio Village Emperial na Pituba',
    //         descricao_noticia: 'Empreendimento moderno, conta com portaria monitorada por robôs...',
    //         artigo_noticia: 'Artigo da notícia...',
    //         autor_noticia: 'Islania Silva',
    //         publicado_por: "House&Lar",
    //         nome_imagem: 'img-card-imovel.jfif',
    //         data_imagem: imgBuffer,
    //         nome_categoria: 'Nome da Categoria',
    //         status: 'Publicada',
    //     });

    //     expect(res.status).toBe(200)
    // }),
    // test("Deve retornar um erro ao tentar publicar notícia com dados inválidos na rota", async()=>{
    //     const res = await request(app).get('/corretor/publicarNoticias').send({
    //         titulo_noticia: null,
    //         descricao_noticia: null,
    //         artigo_noticia: null,
    //         autor_noticia: null,
    //         publicado_por: "House&Lar",
    //         nome_imagem: 'img-card-imovel.jfif',
    //         data_imagem: null,
    //         nome_categoria: 'Nome da Categoria',
    //         cor_categoria: 'Cor da Categoria',
    //         status: 'Publicada',
    //     })
    //     expect(res.status).toBe(404);
    // })
    test("Deve retornar as notícias com sucesso em Notícias Corretor", async ()=>{
        const res = await request(app).get('/corretor/noticiasCorretor');
        expect(res.status).toBe(200);
    }),
    test("Deve retornar as categorias com sucesso em Publicar Notícias", async ()=>{
        const res = await request(app).get('/corretor/publicarNoticia');
        expect(res.status).toBe(200);
    })

})