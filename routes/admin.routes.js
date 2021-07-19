/*const {Router} = require('express')
const Admin = require('../models/Admin')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()

// /api/admin/adminAuth

router.post(
    '/adminAuth', 
    [
        check('email', 'Некорртектный email').normalizeEmail().isEmail(),
        check('password','Минимальная длина пароля 6 символов').exists()
    ] ,
    async(req, res) =>{
    try{
        //console.log('Body:', req.body)
        
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }
        const{email,password} = req.body
        const admin = await Admin.findOne({email})

        if(!user){
            return res.status(400).json({message:'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch){
            return res.status(400).json({message:'Неверный пароль, попробуйте снова'})
        }

        const token = jwt.sign(
            {
                adminId: admin.id
            },
            config.get('jwtSecret'),
            {
                expiresIn:'1h'
            }
        )
        res.json({token, adminId:admin.id})


    }catch(e){
        res.status(500).json({message:'Что-то не так, попробуйте еще раз'})
    }
})

module.exports = router*/

