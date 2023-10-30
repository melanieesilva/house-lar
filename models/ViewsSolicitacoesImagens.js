const db = require('../Database/Connection')


const viewSolicitacaoImagem = db.connect.define('ViewSolicitacaoImagem',{
    id_soli: db.Sequelize.INTEGER,
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
    nomeCliente: db.Sequelize.STRING,
	telefone: db.Sequelize.STRING,
	email: db.Sequelize.STRING,
	CPF: db.Sequelize.STRING,
	cidade: db.Sequelize.STRING,
	bairro: db.Sequelize.STRING,
	endereco: db.Sequelize.STRING,
	numero: db.Sequelize.INTEGER,
    dataPublicacao: db.Sequelize.DATEONLY,
    id_imagem: db.Sequelize.INTEGER,
    nomeImagem: db.Sequelize.STRING,
    pathImagem: db.Sequelize.STRING,
},{
    tableName: 'ViewSolicitacaoImagem',
    timestamps: false,
})

viewSolicitacaoImagem.removeAttribute('id')

// viewSolicitacaoImagem.sync({force:true})

module.exports = viewSolicitacaoImagem