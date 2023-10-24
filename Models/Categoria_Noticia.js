const db = require('../Database/Connection')

//Definindo modelo Categoria_noticia

const Categoria_Noticia = db.connect.define('categoria_noticia',{
    nome_categoria: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cor_categoria: {
        type: db.Sequelize.ENUM('Amarelo', 'Azul', 'Roxo', 'Verde', 'Laranja', 'Vermelho'),
        allowNull: false
    }
});

// Categoria_Noticia.create({
//     nome_categoria: "Oportunidade Tenda",
//     cor_categoria: "Vermelho"
// })

// Categoria_Noticia.sync({force:true})

module.exports = Categoria_Noticia