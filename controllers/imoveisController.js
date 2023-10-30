const Imoveis = require('../models/Imoveis')

const getImoveis = async (req, res) => {
    try {
      const imoveis = await Imoveis.findAll();
      console.log(imoveis);
      res.status(200).render('pages/imoveisPublicados', {
        imoveis: imoveis,
        layout: 'painelControle',
        pageTitle: 'Imoveis - Painel De Controle'
      });
    } catch (error) {

      throw new Error(error);
    }
};

module.exports = {
    getImoveis
}