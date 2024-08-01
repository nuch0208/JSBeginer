const User = require('../Models/User') //เรียกใช้ model ..ถอยหลัง 1 ครั้ง
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.register = async(req,res)=>{
    try{

        //1.Check  user
        console.log(req.body)
        const { name , password } = req.body
        var user = await User.findOne({ name })
        if(user){
            return res.send('User Already Exists !!!').status(400)
        }
        //2.Encrypt
        const salt = await bcrypt.genSalt(10)
        user = new User({
            name,
            password
        })
        user.password = await bcrypt.hash(password, salt)
        //3.Save
        await user.save()
        res.send('Register Success!!')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.login = async(req,res)=>{
    try{
        //1.check user
        const { name , password } = req.body
        var user = await User.findOneAndUpdate({name },{new: true})
        console.log(user)
        if(user){
                const isMatch = await bcrypt.compare(password,user.password) //password ข้อมูลที่มีอยู่ใน DB user.password ข้อมูลที่ได้รับมา 

                if(!isMatch){
                    return res.status(400).send('Password Invalid!!!')
                }
                //2.payload
                var payload={
                    user:{
                        name:user.name //ตัวแปรที่ได้รับมา
                    }
                }
            //3.Generate
            jwt.sign(payload,'jwtsecret',{ expiresIn:30},(err,token)=>{
                if(err) throw err;
                res.json({ token, payload })
            })
        }else{
            return res.status(400).send('User not found !!!')
        }
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}