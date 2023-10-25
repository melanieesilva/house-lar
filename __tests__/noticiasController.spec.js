const fs = require('fs') //Leitura e escrita de arquivos
const noticiasController = require('../controllers/noticiasController')
const Noticias = require('../models/Noticias')

jest.mock('../models/Noticias')

describe("Notícias Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("Deve publicar notícia com sucesso", async () => {
        //Configurando mock de imagem
        const path = 'C:/Users/melan/Documents/GitHub/house-lar/public/img/img-card-imovel.jfif';
        const imgBuffer = fs.readFileSync(path);

        //Criando um mock
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
        test("Deve retornar as categorias disponíveis", () => {

        }),
        test("Deve retornar as notícias publicadas", async () => {
            const mockNoticias = ['noticia1', 'noticia2'];
            Noticias.findAll.mockResolvedValue(mockNoticias);
            const req = {};
            const res = {
                render: jest.fn()
            };

            await getNoticiasCorretor(req, res);

            expect(Noticias.findAll).toHaveBeenCalledTimes(1);
            expect(res.render).toHaveBeenCalledWith('pages/noticiasCorretor', {
                noticias: mockNoticias,
                layout: 'painelControle',
                pageTitle: 'Notícias - Painel De Controle'
            });



        });
})