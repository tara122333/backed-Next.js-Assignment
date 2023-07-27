// Importing Env Variables
require("dotenv").config();

// import libraries
import express from 'express'; // express
import cors from 'cors';  //cors
import helmet from 'helmet';  //helmet
import passport from 'passport'; //passport
const session = require('express-session') // session

const port = 4000;

// Database conncetion
import ConnectDB from'./database/connection';

// app name
const app = express();

// session
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));


// application middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// pawpi.use(helmet());
app.use(cors());


app.get("/",async(req,res)=>{
    res.json({message : "Success"});
})

app.listen(port,()=>{
    console.log(`server has been started on port 4000`);
    ConnectDB().then(()=> console.log(`Listening on port ${port}... database has been connected`)).catch((err)=>console.log(`database not connected ${err}`));
})