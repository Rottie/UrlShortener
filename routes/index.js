const express = require('express')
const router = express.Router()

// require home modules code
const home = require('./modules/home')
// connect request that contain '/' to home modules
router.use('/', home)

// require shorten modules code
const shorten = require('./modules/shorten')
// connect request that contain '/' to shorten modules
router.use('/', shorten)


module.exports = router