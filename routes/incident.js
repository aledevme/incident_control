var express = require('express')
var router = express.Router()

const incidentController = require('../controllers/incident')

router.post('/', incidentController.saveIncident)


module.exports = router