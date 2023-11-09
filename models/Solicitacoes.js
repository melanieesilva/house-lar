const db = require('../Database/Connection')

// Definindo modelo solicitacoes

const Solicitacao = db.connect.define('solicitacoes',{
    statusSoli: db.Sequelize.ENUM('Solicitado','Aceito','Recusado'),
    tipoImovel: db.Sequelize.ENUM('Apartamento','Casa','Kitnet/Studio','Lote','Sala Comercial'),
    operacao: db.Sequelize.ENUM('Venda','Aluguel'),
    descricao: db.Sequelize.TEXT,
    numQuartos: db.Sequelize.INTEGER,
    numBanheiros: db.Sequelize.INTEGER,
    numVagas: db.Sequelize.INTEGER,
    areaImovel: db.Sequelize.FLOAT,
	valorImovel: db.Sequelize.DECIMAL(10,2),
    valorCondominio: db.Sequelize.DECIMAL(10,2),
    valorIPTU: db.Sequelize.DECIMAL(10,2),
    parcelasIPTU: db.Sequelize.INTEGER,
    construcao: db.Sequelize.ENUM('Sim','Não'),
    numAndares: db.Sequelize.INTEGER,
    dataEntrega: db.Sequelize.DATEONLY,
    emCondominio: db.Sequelize.ENUM('Sim','Não'),
    dataPublicacao: {
        type: db.Sequelize.DATEONLY,
        defaultValue: db.Sequelize.NOW
    },
    nomeCliente: db.Sequelize.STRING,
	telefoneCliente: db.Sequelize.STRING,
	emailCliente: db.Sequelize.STRING,
	CPFCliente: db.Sequelize.STRING,
	cidade: db.Sequelize.STRING,
	bairro: db.Sequelize.STRING,
	endereco: db.Sequelize.STRING,
	numero: db.Sequelize.INTEGER
},{
    timestamps: false,
    freezeTableName: true
})

// Solicitacao.sync({force:true})



module.exports = Solicitacao
