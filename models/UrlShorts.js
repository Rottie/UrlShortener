const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  orginalUrl: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  }

  shortUrl:{
    type:string,
    required:true
  }

})
module.exports = mongoose.model('UrlShort', urlSchema)