const connection = require('../database/connection')

module.exports = {

    async create(req, res) {

        const {
            name,
            email,
            password,
            cpf,
            whatsapp,
            role,
            level
        } = req.body

        await connection('user').insert({
            name,
            email,
            password,
            cpf,
            whatsapp,
            role,
            level
        })

        return res.status(200).send('Usuário registrado!')
        
    }
}