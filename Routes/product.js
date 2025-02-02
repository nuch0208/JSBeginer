const express = require('express')
const router = express.Router()

const { read, list , create , update ,remove } = require('../Controllers/product') //เรียกใช้งาน function ใน product controller
//middleware
const { auth } = require('../Middleware/auth')

//http://localhost:5000/api/product
router.get('/product',auth, list) //auth เป็น middleware 
router.get('/product/:id',auth, read)
router.post('/product',auth, create)
router.put('/product/:id',auth, update)
router.delete('/product/:id',auth, remove)

// router.post('/product',create)
// router.put('/product',update)
// router.delete('/product',remove)

// router.get('/product',(req,res)=>{
//     res.send('Hello product endpoint')
// })





// router.get('/product/:id',(req,res)=>{  //เพิ่ม id เพื่อระบุเจาะจง
//     res.send('Hello 1 prodect')
// })

// router.post('/product', (req,res)=>{ //check คือ middle ware ตัวกลางต้อง check ก่อนถึงจะให้ผ่าน
//     res.send('Hello Post Endpoint')
// })
// router.put('/product/:id',(req, res)=>{
//     res.send('Hello Put Endping')
// })
// router.delete('/product/:id',(req, res)=>{
//     res.json({name:'tam', id: 555})
// })

module.exports = router

