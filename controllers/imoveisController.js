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

const excluirImovel = async (req, res) => {
  try {
    const id = req.params.id;
    const Imovel = await Imoveis.findOne({
      where: {
        id: id
      }
    });

    if (Imovel) {
      // Excluir o imóvel do banco de dados
      await Imovel.destroy();

      // Redirecionar de volta para a página de lista de imóveis ou uma rota apropriada
      res.redirect('/corretor/imoveisPublicados');
    } else {
      console.error(`Imóvel com ID ${id} não encontrado.`);
      res.status(404).send("Imóvel não encontrado");
    }
  } catch (error) {
    console.error("Erro ao excluir imóvel:", error);
    res.status(500).send("Erro ao excluir imóvel");
  }
}

module.exports = {
  getImoveis,
  excluirImovel
}