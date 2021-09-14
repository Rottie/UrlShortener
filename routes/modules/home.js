
const express = require('express')
const router = express.Router()
//require UrlShort Mode
const UrlShort = require('../../models/UrlShort')

//index route
router.get('/', (req, res) => {
   UrlShort.find()
  .lean()
  .then(urlshort =>res.render('index',{urlshort}))

   .catch(error=>console.log(error))
})



// Export module
module.exports = router