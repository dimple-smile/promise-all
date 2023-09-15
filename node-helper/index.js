const express = require('express')
const cors = require('cors')
const expressWs = require('express-ws')
const app = express()
app.use(cors())
expressWs(app)

const baseURL = `/api/frontend/socket/v1`

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.ws(baseURL + '/ws/webview', function (ws, req) {
  console.log(1);

  ws.send('你连接成功了')

  ws.on('message', (msg) => {
    console.log(1);
    // 业务代码
  })
})

const port = 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
