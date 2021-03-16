var router = require('./router')

router.get('/', (req, res) => res.send('hey incidents'))

module.exports = router