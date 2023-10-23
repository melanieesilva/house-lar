const db = require('../Database/Connection');

//Definindo modelo Duvidas
const Duvidas = db.connect.define('duvidas',{
    id_duvida: { type: db.Sequelize.INTEGER, primaryKey: true },
    nome_cliente: db.Sequelize.STRING,
    email_cliente: db.Sequelize.STRING,
    telefone_cliente: db.Sequelize.STRING,
    mensagem_cliente: db.Sequelize.TEXT
}, {
    // Adicione a opção autoIncrement: true para a coluna id
    timestamps: false
});

// Duvidas.sync({force:true})
module.exports = Duvidas

