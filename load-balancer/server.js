const express = require('express')
const request = require('request')
const _ = require('lodash')

const app = express()

const backendServers = [
  'http://localhost:9000',
  'http://localhost:9001'
]

app.get('/proxy', function (req, res) {

  // grab one random server
  let server = _.sample(backendServers)
  console.log(`I'm going to request to server: ${server}`)

  request(server, (error, response, body) => {

    if (error) {
      res.send('KO')
      return
    }

    res.send(body)

  })
})

app.listen(7000, function () {
  console.log('Load Balancer working on localhost:7000!')
})


