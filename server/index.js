const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../frontend/src/views')))
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pengding', (req, res) => {
  setTimeout(() => {
    res.send('pengding resolve!')
  }, req.query.time ?? 300)
})

app.get('/token/refresh', (req, res) => {
  setTimeout(() => {
    res.send('new token')
  }, 3000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
