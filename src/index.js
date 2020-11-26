const express = require('express')
const cors = require('cors')
const http = require('http')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send(`Welcome to Playground API ${process.env.API_NAME}`)
})

const port = process.env.PORT || 3005

const server = http.createServer(app)

server.listen(port, () => {
    console.log('API Server is up in port ' + port)
})

