const http = require('http')
const { app } = require('../app/app')

const server = http.createServer(app)
server.listen(4040)


