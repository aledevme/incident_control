var router = require('./router')

const storeController = require('../controllers/store')

router.get('/', storeController.getStores)
router.post('/', storeController.saveStore)

module.exports = router