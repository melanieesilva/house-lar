const db = require('./db')

//Definindo modelo Agenda
const Agenda = db.connect.define('agendas',{
    id_agenda: db.Sequelize.INTEGER,
    mes: db.Sequelize.STRING,
    dia: db.Sequelize.STRING,
    horario: db.Sequelize.STRING
});

// Agenda.sync({force:true})

module.exports = Agenda

