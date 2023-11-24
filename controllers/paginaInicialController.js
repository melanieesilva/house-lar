const Imoveis = require('../models/Imoveis')
const Imagem_Imovel = require('../models/Imagens_Imovel');
const viewImovel = require('../models/ViewImovelImagem')

const Noticias = require('../models/Noticias')
const Categorias = require('../models/Categorias')

const db = require('../Database/Connection')
const sequelize = require('sequelize');


const getNoticias = async (req, res) => {
    try {
        const noticias = await Noticias.findAll();
        console.log(noticias);
        res.status(200).render('pages/noticiasCorretor', {
            noticias: noticias,
            layout: 'painelControle',
            pageTitle: 'Notícias - Painel De Controle'
        });
    } catch (error) {

        throw new Error(error);
    }
};

const getImoveis = async (req, res) => {
    try {
        const imoveis = await Imoveis.findAll();
        const totalPublicados = await Imoveis.count({
            where: {
                statusImovel: "Publicado"
            }
        })
        const totalDesativados = await Imoveis.count({
            where: {
                statusImovel: "Desativado"
            }
        })

        const publicados = imoveis.filter(imovel => imovel.statusImovel === 'Publicado');
        const desativados = imoveis.filter(imovel => imovel.statusImovel === 'Desativado');

        // console.log(imoveis)

        res.status(200).render('pages/imoveisPublicados', {
            publicados: publicados,
            totalPublicados: totalPublicados,
            desativados: desativados,
            totalDesativados: totalDesativados,
            pageTitle: 'Imoveis - Painel De Controle'
        });
        console.log("IMOVEIS ENCONTRADOS")
    } catch (error) {
        console.log("nao encontProu: " + error)
        throw new Error(error);
    }
};

module.exports = {
    getImoveis,
    getNoticias
}