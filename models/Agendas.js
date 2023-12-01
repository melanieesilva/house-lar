const db = require('../database/Connection')

//Definindo modelo Agenda
const Agenda = db.connect.define('agendas',{
    mes: db.Sequelize.STRING,
    dia: db.Sequelize.STRING,
    horario: db.Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
});


module.exports = Agenda

