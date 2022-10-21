const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors())

const catagoris = require('./Data/Catagori.json')

app.get('/', (req, res) => {
    res.send('news api running')
  })
app.get('/catagori', (req, res) => {
    res.send(catagoris)
  })
  
  app.listen(port, () => {
    console.log(`news web ${port}`)
  })