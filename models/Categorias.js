const { ENUM } = require('sequelize');
const db = require('../Database/Connection')

//Definindo modelo Categoria_noticia

const Categorias = db.connect.define('categorias',{
    nome_categoria: {
        type: db.Sequelize.STRING
    },
    cor_categoria: {
        type: db.Sequelize.ENUM('Amarelo', 'Azul', 'Roxo', 'Verde', 'Laranja', 'Vermelho')
    }
},{
    timestamps: false
});

// Categoria_Noticia.create({
//     nome_categoria: "Oportunidade Tenda",
//     cor_categoria: "Vermelho"
// })

// Categorias.sync({force:true})

module.exports = Categorias