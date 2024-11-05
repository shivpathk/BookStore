import express from 'express';
import { configDotenv } from 'dotenv';
import DbConnect from './Database/dbconnection.js';
import router from './Router/router.js';
import cors from 'cors'

configDotenv({path:"./config/config.env"})

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"https://bookstore-frontend-nd98.onrender.com/",
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))

const port = process.env.PORT
const db = process.env.MONGO_URI

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})

app.use('/',router)


DbConnect(db)