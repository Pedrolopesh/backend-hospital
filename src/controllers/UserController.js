const connection = require('../database/connection')

module.exports = {

    async create(req, res) {

        const {
            name,
            email,
            password,
            whatsapp,
            role,
            level
        } = req.body

        const active = true

        await connection('user').insert({
            name,
            email,
            password,
            whatsapp,
            role,
            level,
            active
        })

        return res.status(200).send('Usuário registrado!')
        
    }
}