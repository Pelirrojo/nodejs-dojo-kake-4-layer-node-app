'use strict'

const express = require('express')
const request = require('request')
const _ = require('lodash')

const app = express()

const backendServers = [
  'http://localhost:9000/data',
  'http://localhost:9001/data'
]

app.get('/proxy', (req, res) => {

  // grab one random server
  const server = _.sample(backendServers)
  console.log(`I'm going to request to server: ${server}`)  //NOSONAR

  request(server, (error, response, body) => {

    if (error) {
      res.send('KO')
      return
    }

    res.send(body)

  })
})

app.listen(7000, () => {
  console.log('Load Balancer working on localhost:7000!') //NOSONAR
})


