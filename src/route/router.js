const router = require('express').Router()
const { join } = require('path')
const STATIC = require('../PATH')

const home = (req, res) => (
  res.sendFile(join(STATIC, 'index.html'))
)
const compra = (req, res) => (
  res.sendFile(join(STATIC, 'compra.html'))
)

module.exports = router
  .get('/', home)
  .get('/compra.html', compra)
