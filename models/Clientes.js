const db = require('../Database/Connection.js');



const Cliente = db.connect.define('clientes', {
    // id_cliente: {
    //     type: db.Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
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
},{
    timestamps: false,
    freezeTableName: true
});


Cliente.validarCredenciais = async function(email, senha) {
    const cliente = await Cliente.findOne({ where: { email_cliente: email } });
    if (cliente && cliente.senha_cliente === senha) {
        return cliente;
    }
    return null;
};

// Cliente.sync()


module.exports = Cliente;
