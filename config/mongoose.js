//Step 1 npm mongoose

//Step 2 require 
const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect('mongodb://localhost/Url_Shortener') // 設定連線到 mongoDB

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