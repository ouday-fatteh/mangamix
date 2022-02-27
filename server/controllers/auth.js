import UserData from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


//user register new account

export const userRegister = async (req,res) => {
    const saltRounds=10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const user = req.body;
    const email = user.email;
    const username = user.username;
    UserData.findOne({email:email}).then(async User => {

    

    if (!User){
    const newUser = new UserData({
        username : user.username,
        email : user.email,
        password: hashedPassword ,
        phoneNumber : user.phoneNumber
    });

        
    try {
        await newUser.save();
        res.status(201).json({Message:"تم إنشاء حساب المستخدم بنجاح"});
    } catch (error) {
        res.status(409).json({Message : error.message});
    }
    }
    else {
        res.status(400).json({Message : "البريد الإلكتروني مسجل مسبقا"});
    }
 
    })
}

//User login verification

export const userLogin = async (req,res) => {
    const user = req.body;
    const email = user.email;
    const password = user.password;
    UserData.findOne({email:email}).then(User => {
        if (!User) {
           return res.status(400).json({Message:"لا يوجد مستخدم بهذا البريد الإلكتروني"})

        }
        bcrypt.compare(password, User.password,(err,Data)=>{
            if(err) throw err
            
            if (Data){
                
                return res.status(201).json({Message:`مرحبا بعودتك ${User.username}`})
            }
            else{
                
                return res.status(400).json({Message:"البريد الإلكتروني أو كلمة المرور غير صالحة"})
            }
        });
    }

    )


}