import { Router } from 'express';
import {userSignUp, userLogin, getUser} from '../controller/user.js'
const user = Router(); 


user.post("/signUp",userSignUp)
user.post("/login",userLogin)
user.get("/user/:id",getUser)


export default user; 
