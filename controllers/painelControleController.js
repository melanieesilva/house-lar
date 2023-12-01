const Cliente = require('../models/Clientes')


async function getCliente() {
    try {
        const cliente = await Cliente.findOne({
            where: {
                id: 1
            }
        })
        console.log('Cliente encontrado!')
        console.log(cliente)
        return cliente;
    } catch (error) {
        console.log('Não foi possível encontrar cliente. O erro: '+error)
    }
}

module.exports = {
    getCliente
}