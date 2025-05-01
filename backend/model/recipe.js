import mongoose from "mongoose"

const reciepieSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    ingredients:{
        type:Array,
        require:true
    },
    instructions:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    coverImage:{
        type:String,
        require:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{ timestamps: true })

const Recipes = mongoose.model("Recipes",reciepieSchema)

export default Recipes;