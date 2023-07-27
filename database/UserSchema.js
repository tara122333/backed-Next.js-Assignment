// import Libraries
import mongoose from 'mongoose'

// User Schema
const UserSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },

},{timestamps:true});


export const UserModel = mongoose.model("Users",UserSchema);