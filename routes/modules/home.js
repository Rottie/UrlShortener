
const express = require('express')
const router = express.Router()
//require UrlShort Mode
const UrlShort = require('../../models/UrlShort')

//index route
router.get('/', (req, res) => {
    res.render('index')
})



// Export module
module.exports = router