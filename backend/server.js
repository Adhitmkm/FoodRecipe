import express from 'express';
import dotenv from 'dotenv';
import route from './routes/recipe.js';
import connectDB from './config/DB.js';
import cors from 'cors'
import User from './routes/user.js'

dotenv.config();

const app = express();

 const PORT = process.env.PORT || 3000;
 connectDB()
 app.use(cors())
 app.use(express.static("public"))
 app.use(express.json())

 app.use("/recipes",route)
 app.use("/",User)

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })
