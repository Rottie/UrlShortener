const express = require('express')
const router = express.Router()
// require UrlShort Model
const UrlShort = require('../../models/UrlShort')
//Include this js file to output shorten url that done validation of uniqueness in databases
const shortenUrl= require('../../public/javascripts/shorten_Url');


const baseUrl = 'https://fathomless-shelf-85245.herokuapp.com/'

// POST routes
router.post('/', async(req, res) => {
  //obtain original Url from input form
  let originalUrl=req.body.originalUrl
  
  
  let shortUrl =''

  //compare input url with orginalUrl in database
  UrlShort.findOne({originalUrl } )
  .lean()
  .then(async(urls)=> {
    //If input url repeated in database
    if(urls)
    {
      //Assign shortUrl value from  repeated originalUrl in database to this variable
      shortUrl = urls.shortUrl
      //Return repeated input original url and its  shortUrl to  index page
       return res.render('index', { shortUrl ,originalUrl})
    }


  //if not repeat then create new shortUrl
  shortUrl=await shortenUrl()
  
  //store current input url and newly created shortUrl into database
  UrlShort.create({originalUrl,shortUrl})

  //Then return both value to index page
   .then(()=>res.render('index',{ shortUrl,originalUrl}))
  })
.catch(error => console.log(error))

})

//whenever user press a href or copy to browser
router.get('/:id',(req,res)=>{
  //obtain 5random produced character from produced shorten url
  const id = req.params.id

  //combine baseurl and 5 random to form shortUrl
  const shortUrl = baseUrl +  id
   
  //search current shortUrl in database
  UrlShort.findOne({shortUrl })
  .lean()
  //if found,redirect to its origianUrl value
  .then( (urls) => res.redirect(urls.originalUrl))
 .catch((error) => res.redirect('/'))
})





module.exports = router