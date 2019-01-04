const router = require('express').Router()

router.use('/drone', require('./drone'))

module.exports = router