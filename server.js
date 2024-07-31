const express = require('express') //เรียกใช้ express

const morgan = require('morgan')
const cors =require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

const {readdirSync} = require('fs')
// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

const app = express(); //สร้างตัวแปรเพื่อใช้งาน express

connectDB()

app.use(morgan('dev')) //เรียนใช้ morgan ทุกครั้งที่มีการเรียกใช้งานผ่าน api ตรงนี้จะช่วยให้เราเป็นว่ามีการใช้งานเรียกใช้อะไร
app.use(cors())//ตัวอำนวยความสะดวก ตัวผ่านทาง
app.use(bodyParse.json({ limit: '10mb' }))

//Route 1
// app.get('/product',(req,res)=>{
//     res.send('Hello Endpoint')
// })

//สร้าง Folder ใหม่ เพื่อสร้างไฟล์เฉพาะ route

//Route 2 สร้างไฟล์ ขึ้นมาแยกต่างหากแล้ว import route มาใช้ และใช้ app.user เพื่อนำมาใช้งาน
// app.use('/api', productRouters)
// app.use('/api', authRouters)


//Route 3 แบบออโต้ประการตัวแปรก่อน  เข้าไปอ่านใน dir นี้เลย
readdirSync('./Routes')
    .map((r)=> app.use('/api' , require('./Routes/'+r)))

app.listen(5000,()=> console.log('Server is running on port 5000')) //run server ที่ port 5000