const express = require('express')
const app = express()
const port = 3000

app.get('/hi', (req, res) => {
  res.send('Hi , this is express router')
})

app.get('/', (req, res) => {
  res.send('Hello world <a href="/hi">안녕</a>')
})

app.listen(port, () => {
  console.log(`${port} listen`)
})
