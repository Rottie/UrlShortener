// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()

//Step require hbs tools
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000

//Step 4IIA.require file
const shortenUrl = require('./shorten_Url')


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//Gain mongoose setting
require('./config/mongoose')



app.use(express.urlencoded({ extended: true }))
// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定首頁路由
app.post('/', (req, res) => {
// const result = shortenUrl(originalUrl)
 const originalurl=req.body

 
const final =shortenUrl(originalurl)


  res.render('index',{final:final,originalurl:originalurl})
})


// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})