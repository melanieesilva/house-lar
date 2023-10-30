
const db = require('./db')

//Definindo modelo Imoveis

const Imoveis = db.connect.define('Imoveis',{
    tipo_imovel: db.Sequilize.ENUM('Casa','Apartamento','Lote','Kitnet/Studio','Sala Comercial'),
    operacao: db.Sequilize.ENUM('Comprar','Alugar'),
    descricao: db.Sequilize.STRING,
    num_quartos: db.Sequilize.INTEGER,
    num_banheiros: db.Sequilize.INTEGER,
    num_vagas: db.Sequilize.INTEGER,
    area: db.Sequilize.FLOAT,
    valor: db.Sequilize.DECIMAL,
    valor_condominio: db.Sequilize.DECIMAL,
    iptu: db.Sequilize.DECIMAL,
    parcelas_iptu: db.Sequilize.INTEGER,
    construcao: db.Sequilize.TINYINT,
    num_andares: db.Sequilize.INTEGER,
    data_entrega: db.Sequilize.DATE,
    em_condominio: db.Sequilize.TINYINT,
    data_publicacao: db.Sequilize.DATE
});
// Imoveis.sync({force:true})

module.exports = Imoveis