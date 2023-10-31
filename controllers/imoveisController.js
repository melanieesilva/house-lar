const Imoveis = require('../models/Imoveis')

const getImoveis = async (req, res) => {
  try {
    const imoveis = await Imoveis.findAll();
    const publicados = imoveis.filter(imovel => imovel.statusImovel === 'Publicado');
    const desativados = imoveis.filter(imovel => imovel.statusImovel === 'Desativado');

    res.status(200).render('pages/imoveisPublicados', {
      publicados: publicados,
      desativados: desativados,
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
      req.flash('success_msg', 'Imóvel excluído com sucesso');
      // Redirecionar de volta para a página de lista de imóveis ou uma rota apropriada
      res.redirect('/corretor/imoveisPublicados');
    } else {
      req.flash('error_msg', `Imóvel com ID ${id} não encontrado.`);
      res.status(404).send("Imóvel não encontrado");
    }
  } catch (error) {
    req.flash('error_msg', 'Erro ao excluir imóvel');
    res.status(500).send("Erro ao excluir imóvel");
  }
}

module.exports = {
  getImoveis,
  excluirImovel
}