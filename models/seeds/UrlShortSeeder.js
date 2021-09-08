const UrlShort = require('../UrlShort') // 載入 todo model



const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')

   for (let i = 0; i < 1; i++) {
    UrlShort.create({originalUrl: 'https://'+i})
  }
  console.log('done')
}) 