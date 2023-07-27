// Importing Env Variables
require("dotenv").config();

// import libraries
import express, { response } from 'express'; // express
import cors from 'cors';  //cors
import helmet from 'helmet';  //helmet

const port = 4000;

// Database conncetion
import ConnectDB from'./database/index';
import { UserModel } from './database/UserSchema';

// app name
const app = express();



// application middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// pawpi.use(helmet());
app.use(cors());


app.get("/",async(req,res)=>{
    res.json({message : "Success"});
})

app.post("/create", async(req,res)=>{
    try {
        const {email, fullname} = req.body;
        // console.log(email);
        // console.log(fullname);

        const newUserData = await UserModel({
            email : email,
            fullname : fullname,
        })

        console.log(newUserData);
        const data = await newUserData.save();
        // const userData = await UserModel.create({email});
        return res.status(202).json({message : "user created success", data});
    } catch (error) {
        return res.status(501).json({message  : error})
    }
});

app.listen(port,()=>{
    console.log(`server has been started on port 4000`);
    ConnectDB().then(()=> console.log(`Listening on port ${port}... database has been connected`)).catch((err)=>console.log(`database not connected ${err}`));
})