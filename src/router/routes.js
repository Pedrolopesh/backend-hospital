const express = require('express')
const routes = express.Router()
const auth = require('../utils/auth')
const UserController = require('../controllers/UserController')
const OcrController = require('../controllers/OcrController')

routes.route('/user')
    .get((req, res) => res.send('tudo ok'))
    .post(UserController.create)

routes.route('/ocr')
    .get(OcrController.index)
    .post(OcrController.create)

// Auth route

routes.post('/login', auth, function (req, res) {
    res.send(req.user)
})

module.exports = routes