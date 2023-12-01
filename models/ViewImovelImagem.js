const db = require('../Database/Connection')

const viewImovelImagem = db.connect.define('ViewImovelImagem',{
    id_imovel: db.Sequelize.INTEGER,
    statusImovel: db.Sequelize.ENUM('Publicado','Desativado'),
    tipo_imovel: db.Sequelize.ENUM('Casa','Apartamento','Lote','Kitnet/Studio','Sala Comercial'),
    operacao: db.Sequelize.ENUM('Venda','Aluguel'),
    descricao: db.Sequelize.STRING,
    num_quartos: db.Sequelize.INTEGER,
    num_banheiros: db.Sequelize.INTEGER,
    num_vagas: db.Sequelize.INTEGER,
    area: db.Sequelize.FLOAT,
    valor_imovel: db.Sequelize.DECIMAL,
    valor_condominio: db.Sequelize.DECIMAL,
    valor_iptu: db.Sequelize.DECIMAL,
    parcelas_iptu: db.Sequelize.INTEGER,
    construcao: db.Sequelize.ENUM('Sim','Não'),
    cidade: db.Sequelize.STRING,
	bairro: db.Sequelize.STRING,
    num_andares: db.Sequelize.INTEGER,
    data_entrega: db.Sequelize.DATEONLY,
    em_condominio: db.Sequelize.ENUM('Sim','Não'),
    data_publicacao: {
        type: db.Sequelize.DATEONLY,
        defaultValue: db.Sequelize.NOW
    },
    id_imagem: db.Sequelize.INTEGER,
    nome_imagem: db.Sequelize.STRING,
    path_imagem: db.Sequelize.STRING,
},{
    freezeTableName: true,
    timestamps: false
})

viewImovelImagem.removeAttribute('id')

// viewImovelImagem.sync({force:true})

module.exports = viewImovelImagem