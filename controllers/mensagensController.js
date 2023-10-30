/*Ainda não sei se a lógica tá certa. Se estiver, vai faltar pouca coisa pras mensagens serem exibidas
na lateral */

const Duvidas = require('../models/Duvidas');

const getMensagem = async (req,res) =>{
    try {
        const viewMensagem = await Duvidas.findAll({
            where:{
                id_msg:req.params.id
            }
        })
        res.json({viewMensagem})
        return viewMensagem
    } catch (error) {
        console.log("Não foi possível buscar: "+error)
    }
}

module.exports = {
    getMensagem
}