// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()

//Step require hbs tools
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



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


// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})