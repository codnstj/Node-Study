const http = require('http')
// eslint-disable-next-line node/no-unsupported-features/node-builtins
const fs = require('fs').promises

http
  .createServer(async (req, res) => {
    const data = await fs.readFile('./server.html')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(data)
  })
  .listen(8081, () => {
    console.log('port 8081 listen')
  })

http
  .createServer(async (req, res) => {
    const data = await fs.readFile('./server2.html')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(data)
  })
  .listen(8082, () => {
    console.log('port 8082 listen')
  })
