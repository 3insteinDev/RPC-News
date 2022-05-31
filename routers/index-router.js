const express = require('express')
const router = express.Router()

const visualizar_index = require(`../app/controllers/index-controller.js`)
const receber_dados = require(`../app/controllers/index-controller.js`)

router.get('/index', visualizar_index.index)


module.exports = router