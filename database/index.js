require("dotenv").config();
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
export default async ()=>{
    // mongodb://127.0.0.1:27017/Pawpi
    return mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};