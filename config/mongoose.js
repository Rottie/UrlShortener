//Step 1 npm mongoose

//Step 2 require 
const mongoose = require('mongoose') // 載入 mongoose

// config/mongoose.js
// 如果在 Heroku 環境則使用 process.env.MONGODB_URI
// 否則為本地環境，使用 mongodb://localhost/todo-list
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Url_Shortener'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })


//Step 3 gain connection status
//3A. 取得資料庫連線狀態
const db = mongoose.connection
//3B. 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
//3C.連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db