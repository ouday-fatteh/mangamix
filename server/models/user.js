import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        min:3,
        required:true,
        unique:true
    },
    email:{
        type:String,
        min:10,
        required:[true, "can't be blank"],
        lowercase:true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique:true
    },
    phoneNumber:String,
    password:String,
    preferedManga:[String],
},
{timestamps:true})

const UserData = mongoose.model('UserData',userSchema);
export default UserData;