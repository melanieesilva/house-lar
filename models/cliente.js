const db = require('../Database/Connection.js');
const Sequelize = require('sequelize');
const Cliente = db.connect.define('cliente', {
    id_cliente: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha_cliente: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
});

// db.connect.sync({ force: true }).then(() => {
//     console.log('Tabelas sincronizadas.');
// });

Cliente.validarCredenciais = async function(email, senha) {
    const cliente = await Cliente.findOne({ where: { email_cliente: email } });
    if (cliente && cliente.senha_cliente === senha) {
        return cliente;
    }
    return null;
};


module.exports = Cliente;
