const express = require('express')
const routes = express.Router()
const passport = require('passport')
const UserController = require('../controllers/UserController')

routes.route('/user')
    .get((req, res) => res.send('tudo ok'))
    .post(UserController.create)

routes.post('/login', passport.authenticate('local', {
    session: false
}), function (req, res) {
        res.send(req.user)
})

module.exports = routes