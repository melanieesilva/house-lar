const Disponivel = require('../models/Disponibilidades')
const db = require('../Database/Connection')

const cadastrarData = async(req, res) => {
    try {
        const{horario} = req.body

        await Disponivel.create({
            selecionar_data: horario
        });
    }
}