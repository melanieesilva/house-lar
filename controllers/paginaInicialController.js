const Imoveis = require('../models/Imoveis')
const Imagem_Imovel = require('../models/Imagens_Imovel');
const viewImovel = require('../models/ViewImovelImagem')

const Noticias = require('../models/Noticias')
const Categorias = require('../models/Categorias')

const db = require('../Database/Connection')
const sequelize = require('sequelize');




const getImoveiseNoticias = async (req, res) => {
    try {
        
        const noticias = await Noticias.findAll();
        
        const totalPublicados = await Imoveis.count({
            where: {
                statusImovel: "Publicado"
            },
        })

        const publicados = await Imoveis.findAll({
            where: {
                statusImovel: "Publicado"
            },
            limit: 4,
        })

        // console.log(imoveis)
        res.status(200).render('pages/paginaInicial', {
            publicados: publicados,
            totalPublicados: totalPublicados,
            pageTitle: 'PAGINA INICIAL'
        });
        console.log("IMOVEIS ENCONTRADOS NA PAGINA INICIAL")
    } catch (error) {
        console.log("nao encontProu: " + error)
        throw new Error(error);
    }
};

module.exports = {
    getImoveiseNoticias
}