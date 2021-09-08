const mongoose = require('mongoose')
const UrlShort = require('../UrlShort') // 載入 todo model

mongoose.connect('mongodb://localhost/Url_Shortener')


const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')

   for (let i = 0; i < 1; i++) {
    UrlShort.create({originalUrl: 'https://'+i})
  }
  console.log('done')
}) 