//Define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


function shortenUrl(originalUrl) {
  
  //Define character exist in shorten url
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  
 //Define shortUrl length
  const shortUrlLength = 5
  
//
 let  test=[]
 test=originalUrl.url

//Step 1E.create a collection to store things user picked up
  let collection = []
  
 
   //Step 1F.if field value is on mean clicked ,then
  if (test.length !== 0) {
    //1st  split string into array
    //2nd concat multi array  lower case,upper,number,symbol  into one array
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  //other same concept as step 1F
  if (test.length  !== 0) {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (test.length  !== 0) {
    collection = collection.concat(numbers.split(''))
  }

if (test.length === 0) {
    return 'Please enter url then submmit.'
  }



let result = ''

for (let i = 0; i < shortUrlLength; i++) {
    result += sample(collection)
  }
  
  //Define empty string array as final shorten url
  let final=''
  //Define const url for shorten url
  const baseUrl="https://fathomless-shelf-85245.herokuapp.com/"
  //combine const url and shortUrl 
  final=baseUrl+result
  
  return final
}
 

module.exports =  shortenUrl