import UserData from "../models/user.js";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";

//user register new account

export const userRegister = async (req,res) => {
    const saltRounds=10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const user = req.body;
    const newUser = new UserData({
        username : user.username,
        email : user.email,
        password: hashedPassword ,
        phoneNumber : user.phoneNumber
    });
    try {
        await newUser.save();
        res.status(201).json({message:"User created successfuly"});
    } catch (error) {
        res.status(409).json({Error : error.message});
    }
}

//User login verification

export const userLogin = async (req,res) => {
    const user = req.body;
    const email = user.email;
    const password = user.password;
    UserData.findOne({email:email}).then(User => {
        if (!User) {
           return res.status(400).json({message:"Account not found"})

        }
        bcrypt.compare(password, User.password,(err,Data)=>{
            if(err) throw err
            
            if (Data){
                
                return res.status(201).json({message:"login successful"})
            }
            else{
                
                return res.status(400).json({message:"email and password does not match"})
            }
        });
    }

    )


}