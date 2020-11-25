const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const ip = require('ip')
const api = require('./api')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => console.log('mongodb connected'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.use('/api/ticket', api)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
)

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
  console.log(`or at http://${ip.address()}:${PORT}`)
})
