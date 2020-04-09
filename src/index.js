const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const routes = require('./router/routes')
const cors = require('cors')
const passport = require('passport')
const Strategy = require('./utils/passport.js')

app.use(cors())
app.use(express.json())

// Auth

passport.use(Strategy)

// Recurso padrão

app.use('/api', routes)

// Server

app.listen(port, () => {
    console.log('On')
})