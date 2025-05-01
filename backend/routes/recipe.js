

import { Router } from 'express';
import { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload } from '../controller/recipe.js';
import { verifyToken } from '../middleware/auth.js';

const route = Router(); 

route.get('/', getRecipes); // get all reciepie
route.get('/:id',getRecipe);
route.post('/',upload.single('file'), verifyToken, addRecipe);
route.put('/:id',upload.single('file') ,editRecipe);
route.delete('/',deleteRecipe);

export default route; 
