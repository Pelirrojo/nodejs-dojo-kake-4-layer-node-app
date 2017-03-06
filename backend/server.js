'use strict'

const express = require('express')
const request = require('request')
const _ = require('lodash')

const app = express()

const port = process.env.PORT || 9000
const dataBase = [
  'http://localhost:9000',
  'http://localhost:9001'
]

app.get('/data', (req, res) => {

  // TODO impl from dojo-trile


})



app.listen(port, () => {
  console.log(`Backend Server working on localhost:${port}!`) //NOSONAR
})


