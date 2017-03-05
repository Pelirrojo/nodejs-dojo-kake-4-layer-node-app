'use strict'

const cors = require('cors')
const express = require('express')
const request = require('request')
const app = express()

app.use(cors())

app.get('/token', (req, res) => {

  res.status(200).send({token: 12345})

})

/**
 * Note that, this two sentences are equivalent:
 *
 * app.get('/data', function (req, res) { ... })
 * app.get('/data', (req, res) => { ... })
 */

app.get('/data', (req, res) => {

  if (req.query.token !=='12345') {
    return res.status(401).send(`forbidden, invalid token: ${req.query.token}`)
  }

  request('http://localhost:7000/proxy', (error, response, body) => {

    if (error) {
      return res.send('KO')
    }

    res.send(body)
  })
})

app.listen(3000, () => {
  console.log('Auth server working on localhost:3000!') //NOSONAR
})
