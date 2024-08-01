const express = require('express')
const router = express.Router()

const { register , login } = require('../Controllers/auth') //เรียกใช้ controller



// http://localhost:5000/api/register
// http://localhost:5000/api/login
router.post('/register', register) //เรียกใช้ function ใน auth controller
router.post('/login',login)


module.exports = router