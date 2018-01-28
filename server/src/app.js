console.log('hola')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hola ${req.body.email}! su usuario fue registrado ! Diviertase!`
  })
})

app.listen(process.env.Port || 8081)
