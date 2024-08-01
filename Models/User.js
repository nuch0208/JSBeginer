const mongoose = require('mongoose')

//สร้างโครงสร้าง database schema
const userSchema = mongoose.Schema({
    name:String,
    password:{
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('users',userSchema) //export เป็นประเภท model ที่ชื่อ users โดยอ้างจาก userSchema