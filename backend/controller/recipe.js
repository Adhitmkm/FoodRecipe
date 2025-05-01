import Recipes from "../model/recipe.js";
import multer from "multer";

 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.fieldname
      cb(null, filename)
    }
  })
  
export  const upload = multer({ storage: storage })

export const getRecipes = async (req,res) => {
    try{
      const recipes = await Recipes.find()
      return res.json(recipes)
    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}

export const getRecipe = async (req,res) => {
    try{
      const recipe = await Recipes.findById(req.params.id)
      return res.json(recipe)
    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}

export const addRecipe = async (req,res) => {

    console.log(req.file,"jjjjjjj")
    console.log(Recipes)

    try{
      const {title, ingredients, instructions, time}= req.body

      if(!title || !ingredients  || !instructions) {
        res.json({message:"Required fields can't be empty"})
      }


      const newRecipes = await Recipes.create({
        title, ingredients, instructions, time,coverImage:req.file.filename,
        createdBy:req.user.id
      })

      return res.json(newRecipes)


    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}

export const editRecipe=async(req,res)=>{
    const {title,ingredients,instructions,time}=req.body 
    let recipe=await Recipes.findById(req.params.id)

    try{
        if(recipe){
            let coverImage=req.file?.filename ? req.file?.filename : recipe.coverImage
            await Recipes.findByIdAndUpdate(req.params.id,{...req.body,coverImage},{new:true})
            res.json({title,ingredients,instructions,time})
        }
    }
    catch(err){
        return res.status(404).json({message:err})
    }
    
}


export const deleteRecipe = async(req,res) => {
    try{
        await Recipes.deleteOne({_id:req.params.id})
        res.json({status:"ok"})
    }catch(err){
        console.error("Error:", err);
        return res.status(500).json({ err: "Something went wrong" });
    }
}