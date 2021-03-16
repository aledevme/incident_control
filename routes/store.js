var router = require('./router')

const storeController = require('../controllers/store')

router
.get('/', storeController.getStores)
.post('/', storeController.saveStore)

module.exports = router