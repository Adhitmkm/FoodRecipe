import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const userSignUp = async(req,res) =>{
    console.log("heloooo")
    try{
      const {email, password} = req.body;
      if(!email || !password){
        return res.status(400).json({message:"Email and password required"})
      }

      let user = await User.findOne({email})

      if(user){
        return res.status(400).json({error:"User alredy exist"})
      }

      const hashpwd = await bcrypt.hash(password,10)
      const newUser = await User.create({
        email,password:hashpwd
      })
    //   let token = jwt.sign({email,id:newUser._id},process.env.SECRET_KEY,{expiresIn:3hour})
    let token = jwt.sign({email,id:newUser._id},process.env.SECRET_KEY)
    return res.status(200).json({token,user:newUser})


    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}
export const userLogin = async(req,res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
          return res.status(400).json({message:"Email and password required"})
        }
        let user = await User.findOne({email})
        if(user && await bcrypt.compare(password,user.password)){
            let token = jwt.sign({email,id:user._id},process.env.SECRET_KEY)
            return res.status(200).json({token,user})
        }else{
            return res.status(400).json({error:"Invalid credential"})
        }
    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}
export const getUser = async(req,res) =>{
    try{
      const user = await User.findById(req.params.id)
      res.json({email:user.email})
    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}