const Imoveis = require('../models/Imoveis')
const Imagem_Imovel = require('../models/Imagens_Imovel');
const viewImovel = require('../models/ViewImovelImagem')
const db = require('../Database/Connection')
const sequelize = require('sequelize');

async function cadImagensImovel(idImovel, nomeImagem, pathImagem) {

  try {
    const imagemCriada = await Imagem_Imovel.findOne({
      where: {
        idImovel_FK: idImovel,
        nome_imagem: nomeImagem,
        path_imagem: pathImagem
      }
    });

    if (imagemCriada) {
      console.log("Registro já existe e não foi adicionado.")
    } else {
      const imagem_imovel = await Imagem_Imovel.create({
        idImovel_FK: idImovel,
        nome_imagem: nomeImagem,
        path_imagem: pathImagem
      }).then(() => { console.log("Imagem criada com sucesso!") }).catch((erro) => {
        console.log("Não foi possível cadastrar a imagem, veja o erro: " + erro)
      })
      return imagem_imovel;
    }

  } catch (error) {
    console.log("Não foi possível cadastrar a imagem: " + error)
    // throw new Error('Não foi possível cadastrar imagem.')
  }
}

const cadastrarImovel = async (req, res) => {
  try {
    const {
      nomeProp,
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
    } = req.body
    const indexImagemRemovida = req.body.indexImagemRemovida
    const imagensEnviadas = req.files;
    let imagensSelecionadas;
    var imagensFinais;

    console.log(indexImagemRemovida)
    if (indexImagemRemovida === undefined) {
      console.log("index undefined")
      imagensFinais = imagensEnviadas
    } else {
      let indexesRemovidos = indexImagemRemovida.split(',').map(index => parseInt(index, 10));
      imagensSelecionadas = imagensEnviadas.filter((file, index) => {
        return !indexesRemovidos.includes(index);
      });
      imagensFinais = imagensSelecionadas
    }
    const imoveis = await Imoveis.create({
      statusImovel: "Publicado",
      tipo_imovel: tipoImovel,
      operacao: operacao,
      descricao: descricao,
      num_quartos: numQuartos,
      num_banheiros: numBanheiros,
      num_vagas: numVagas,
      area: tamArea,
      valor_imovel: valorImovel,
      valor_condominio: valorCondominio,
      valor_iptu: valorIPTU,
      parcelas_iptu: parcelaIPTU,
      construcao: construcaoImovel,
      num_andares: andaresImovel,
      data_entrega: dataEntrega,
      em_condominio: condominioImovel,
      cidade: cidade,
      bairro: bairro,
      endereco: endereco,
      numero: numero,
      nome_prop: nomeProp,
      email_prop: email,
      telefone_prop: telefone,
      cpf_prop: cpf
    }).then((imovel) => {

      for (const img of imagensFinais) {
        cadImagensImovel(imovel.id, img.filename, img.path).then(() => {
          req.flash("success_msg", "Imóvel publicado com sucesso!")
          res.redirect('/corretor/painelControle')
        }).catch((error) => {
          console.log("Não foi possível cadastrar as imagens: " + error)
        })
      }

      console.log("Imóvel publicado!")
    }).catch((erro) => {
      console.log("ERRO: " + erro)
      req.flash("error_msg", "Não foi possível cadastrar a solicitação!")
      res.redirect('/corretor/painelControle')
    })

  } catch (error) {
    console.log("Não foi possível efetuar o comando", error)
  }
}

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

const getBuscaAvancada = async (req, res) => {
  try {
    const imoveis = await Imoveis.findAll();

    const imoveisFiltrados = imoveis.filter(imovel => {
      const tipoIgual = !req.body.tipo || imovel.tipo_imovel === req.body.tipo;
      const quartosIguais = !req.body.quartos || imovel.num_quartos == req.body.quartos;
      const banheirosIguais = !req.body.banheiros || imovel.num_banheiro == req.body.banheiros;
      const vagasIguais = !req.body.vagas || imovel.num_vagas == req.body.vagas;
      const cidadeIgual = !req.body.cidade || imovel.cidade === req.body.cidade;
      const operacaoIgual = !req.body.operacao || imovel.operacao === req.body.operacao;

      let faixaPrecoValida = true;
      if (req.body.faixaPrecoDe && req.body.faixaPrecoAte) {
        faixaPrecoValida =
          imovel.valor_imovel >= parseFloat(req.body.faixaPrecoDe) &&
          imovel.valor_imovel <= parseFloat(req.body.faixaPrecoAte);
      }

      let faixaAreaValida = true;
      if (req.body.faixaAreaMin && req.body.faixaAreaMax) {
        faixaAreaValida =
          imovel.area >= parseFloat(req.body.faixaAreaMin) &&
          imovel.area <= parseFloat(req.body.faixaAreaMax);
      }

      return (
        tipoIgual &&
        quartosIguais &&
        banheirosIguais &&
        vagasIguais &&
        cidadeIgual &&
        operacaoIgual &&
        faixaPrecoValida &&
        faixaAreaValida
      );
    });

    res.status(200).render('pages/buscaAvancada', {
      imoveis: imoveisFiltrados
    });
  } catch (error) {
    console.log("Complicado!: " + error);
    throw new Error(error);
  }
};


const getCidades = async (req, res) => {
  try {
    const cidades = await Imoveis.findAll({
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('cidade')), 'cidade']]
    });

    res.json(cidades.map(cidade => cidade.cidade));
  } catch (error) {
    console.error('Erro ao buscar cidades:', error);
    res.status(500).json({ error: 'Erro ao buscar cidades' });
  }
}

const getImoveisSelecionados = async (req, res) => {
  try {

    const imoveis = await Imoveis.findAll();

    const imoveisFiltrados = imoveis.filter(imovel => {
      return (
        imovel.tipo_imovel === req.query.tipo &&
        imovel.num_quartos == req.query.quartos &&
        imovel.valor_imovel <= parseFloat(req.query.preco) &&
        imovel.area <= parseFloat(req.query.area) &&
        (imovel.cidade.toLowerCase().includes(req.query.localizacao.toLowerCase()) ||
          imovel.bairro.toLowerCase().includes(req.query.localizacao.toLowerCase())) &&
        imovel.operacao === req.query.operacao 
      );
    });

    res.status(200).render('pages/buscaAvancada', {
      imoveis: imoveisFiltrados
    });

  } catch (error) {
    console.log("Complicado!: " + error);
    throw new Error(error);
  }
};

const getDetalheImovel = async (req, res) => {
  const view_imovel = await viewImovel.findAll({
    where: {
      id: req.params.id
    },
    limit: 4
  })

  if (imovel) {
    res.status(200).render('pages/detalheImovel', { imovel })
    console.log("Detalhes do imóvel encontrados.")
  } else {
    res.status(404).json({ Erro: "Erro 404: Não foi possível encontrar o imóvel." })
    console.log("Detalhes do imóvel não foram encontrados.")
  }

}

const excluirImovel = async (req, res) => {
  try {
    const id = req.params.id;
    const Imovel = await Imoveis.findOne({
      where: {
        id: id
      }
    });


    if (Imovel) {
      await Imagem_Imovel.destroy({
        where: {
          idImovel_FK: Imovel.id
        }
      }).then(() => {
        console.log("As imagens foram excluídas.")
        Imovel.destroy().then(() => {
          req.flash('success_msg', 'Imóvel excluído com sucesso');
          res.redirect('/corretor/painelControle');
        });
      })
    } else {
      req.flash('error_msg', `Imóvel com ID ${id} não encontrado.`);
      res.status(404).send("Imóvel não encontrado");
    }
  } catch (error) {
    req.flash('error_msg', 'Erro ao excluir imóvel');
    res.status(500).send("Erro ao excluir imóvel: " + error);
  }
};


const desativarImovel = async (req, res) => {
  try {
    const id = req.params.id;
    const Imovel = await Imoveis.findOne({
      where: {
        id: id
      }
    });

    if (Imovel) {
      await Imovel.update({
        statusImovel: 'Desativado'
      })

      res.redirect('/corretor/painelControle')

    } else {
      req.flash('error_msg', `Imóvel com ID ${id} não encontrado.`);
      res.status(404).send("Imóvel não encontrado");
    }

  } catch (error) {
    req.flash('error_msg', 'Erro ao atualizar status do imóvel');
    res.status(500).send("Erro ao atualizar status do imóvel");
  }
}

const ativarImovel = async (req, res) => {
  try {
    const id = req.params.id;
    const Imovel = await Imoveis.findOne({
      where: {
        id: id
      }
    });

    if (Imovel) {
      await Imovel.update({
        statusImovel: 'Publicado'
      })

      res.redirect('/corretor/painelControle')

    } else {
      req.flash('error_msg', `Imóvel com ID ${id} não encontrado.`);
      res.status(404).send("Imóvel não encontrado");
    }

  } catch (error) {
    req.flash('error_msg', 'Erro ao atualizar status do imóvel');
    res.status(500).send("Erro ao atualizar status do imóvel");
  }
}
module.exports = {
  getImoveis,
  excluirImovel,
  desativarImovel,
  ativarImovel,
  cadastrarImovel,
  getImoveisSelecionados,
  getDetalheImovel,
  getBuscaAvancada,
  getCidades
}