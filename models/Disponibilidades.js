const db = require('../Database/Connection');

const Disponivel = db.connect.define('disponibilidades',{
    horario: db.Sequelize.DATE
},{
    freezeTableName: true
});

module.exports = Disponivel