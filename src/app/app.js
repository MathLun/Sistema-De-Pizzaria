const   express = require('express'),
	logger = require('morgan'),
	cors = require('cors'),
	bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req,res) => res.json({ version: "v0.3", message: "Este App é um Sistema De Pizzaria"}))

module.exports = { app }
