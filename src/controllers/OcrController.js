const connection = require('../database/connection')

module.exports = {

    async create(req, res) {

        const {
            name,
            queue_id,
            risk_id,
            user_id
        } = req.body

        await connection('ocr').insert({
            name,
            queue_id,
            risk_id,
            user_id
        })

        return res.status(200).send('Ocr registrada')
        
    },

    async index(req, res) {

        const ocrs = await connection('ocr').select('*')

        return res.json(ocrs)
    }
}