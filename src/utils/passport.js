const Strategy = require('passport-local').Strategy
const connection = require('../database/connection')

module.exports = new Strategy({
        session: false
    },
    function (username, password, done) {

        console.log('entrou')

        connection('user')
            .where({
                email: username
            }).first()
                .then((user) => {

                    if (!user) {
                        return done(null, false);
                    }
                    if (user.password != password) {
                        return done(null, false);
                    }
                    return done(null, user);
                })
                .catch((err) => {
                    return done(err);
                })
    }
)