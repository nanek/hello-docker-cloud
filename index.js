const http = require('http')

const hostname = '0.0.0.0'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  var responseBody = {
    hostname: process.env.HOSTNAME,
    message: process.env.MESSAGE
  }

  res.write(JSON.stringify(responseBody))
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
