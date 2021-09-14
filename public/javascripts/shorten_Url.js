async function shortenUrl() {
 
  //Define character type exist in shorten url
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  
 //Define shortUrl length
  const shortUrlLength = 5
  //Define format shortUrl that constant
  const baseUrl="https://fathomless-shelf-85245.herokuapp.com/"

  //join three array into one array
  const allDigits = lowerCaseLetters + upperCaseLetters + numbers
  const collection = allDigits.split('')


//Define result to put random character 
let result = ''

//execute 5 times 
for (let i = 0; i < shortUrlLength; i++) {
  //each time will random pick one character in combine array contained uppercase,lowercase,number
  const index = Math.floor(Math.random() * collection.length)

  //each time produce random character will put in the array,in the end 5 random character combined after for loop
  result += collection[index]
  }

  //combine constant url and the array contain 5 random character
  const finalUrl=baseUrl+result

  //Defines string array for validate short url purpose
  let uniqueUrl=''
  
  // add Url model
  const UrlShort = require('../../models/UrlShort')

  //the shortUrl that create temporarily will be seacrch in databse
  await UrlShort.findOne({shortUrl: finalUrl } )
  .lean()
  .then((urls)=>{
    //if not repeat  in documents
     if(!urls)

{ //assgirn new created shortUrl to into variable
  uniqueUrl=finalUrl
   }
  })
  //error handlig
  .catch(error => console.log(error)) 
  
  //return short Url that done validate uniquess in database
  return uniqueUrl
}
  







module.exports =  shortenUrl
