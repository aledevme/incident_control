var express = require('express')
var router = express.Router()
const userController = require('../controllers/user')

router

.get('/:id/stores', userController.getStores)

module.exports = router