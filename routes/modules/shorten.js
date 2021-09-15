const express = require('express')
const router = express.Router()
// require UrlShort Model
const UrlShort = require('../../models/UrlShort')
//Include this js file to output shorten url that done validation of uniqueness in databases
const shortenUrl= require('../../public/javascripts/shorten_Url');




// POST routes
router.post('/', async(req, res) => {
  //obtain original Url from input form
  let originalUrl=req.body.originalUrl
  
  
  let shortUrl =''

  //compare input url with orginalUrl in database
  UrlShort.findOne({originalUrl: originalUrl } )
  .lean()
  .then(async(urls)=> {
    //If input url repeated in database
    if(urls)
    {
      //Assign shortUrl value from  repeated originalUrl in database to this variable
      shortUrl = urls.shortUrl
      //Return repeated input original url and its  shortUrl to  index page
       return res.render('index', { shortUrl,originalUrl })
    }


  //if not repeat then create new shortUrl
  shortUrl=await shortenUrl()
  
  //store current input url and newly created shortUrl into database
  UrlShort.create({originalUrl,shortUrl})

  //Then return both value to index page
   .then(()=>res.render('index',{ shortUrl,originalUrl }))
  })
.catch(error => res.redirect('/'))

})



router.get('/:id',(req,res)=>{
 

   UrlShort.findOne({shortUrl: req.params.id } )
  .lean()
  .then((urls)=> res.redirect(urls.originalUrl))
  .catch(error => console.log(error))



})




module.exports = router