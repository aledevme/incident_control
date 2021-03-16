var express = require('express')
var router = express.Router()

const storeController = require('../controllers/store')

router
.get('/', storeController.getStores)
.get('/:id', storeController.getStore)
.post('/', storeController.saveStore)

module.exports = router