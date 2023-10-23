const db = require('../Database/Connection')

//Definindo modelo Categoria_noticia

const Categoria_Noticia = db.connect.define('categoria_noticia',{
    id_categoria: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    nome_categoria: db.Sequelize.STRING,
    cor_categoria: db.Sequelize.ENUM('Amarelo', 'Azul', 'Roxo', 'Verde', 'Laranja', 'Vermelho')
}, {
    // Adicione a opção autoIncrement: true para a coluna id
    timestamps: false
});

// Categoria_Noticia.sync({force:true})

module.exports = Categoria_Noticia