
const db = require('../Database/Connection')

//Definindo modelo Imoveis

const Imovel = db.connect.define('Imoveis',{
    statusImovel: db.Sequelize.ENUM('Publicado','Desativado'),
    tipo_imovel: db.Sequelize.ENUM('Casa','Apartamento','Lote','Kitnet/Studio','Sala Comercial'),
    operacao: db.Sequelize.ENUM('Venda','Aluguel'),
    descricao: db.Sequelize.STRING,
    num_quartos: db.Sequelize.INTEGER,
    num_banheiros: db.Sequelize.INTEGER,
    num_vagas: db.Sequelize.INTEGER,
    area: db.Sequelize.FLOAT,
    valor: db.Sequelize.DECIMAL,
    valor_condominio: db.Sequelize.DECIMAL,
    iptu: db.Sequelize.DECIMAL,
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
    }
},{
    timestamps: false,
    freezeTableName: true
});

// Imovel.sync({force:true})

module.exports = Imovel