const mongoose = require('mongoose')

//สร้างโครงสร้าง database schema
const productSchema = mongoose.Schema({
    name:String,
    detail:{
        type: String
    },
    price:{
        type:Number
    }
}, { timestamps: true })

module.exports = mongoose.model('produucts',productSchema)  //export เพื่อให้เรียกใช้งานจากที่อื่นได้