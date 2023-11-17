const db = require('./db')

//Definindo modelo Agenda
const Agenda = db.connect.define('agendas',{
    mes: db.Sequelize.STRING,
    dia: db.Sequelize.STRING,
    horario: db.Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
});

// Agenda.sync({force:true})

module.exports = Agenda

