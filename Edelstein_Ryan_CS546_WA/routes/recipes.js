const express = require('express');
const router = express.Router();
const data = require("../data");
const recipes = data.recipes;

router.get('/',async (req,res) =>{
  recipes.getAllRecipes().then((recipes) =>{
    res.json(recipes)
  }).catch((err)=>{
    res.status(404).json({error:err});
  });
})
router.get('/:id',async (req,res) =>{
  try{
    const recipe = await recipes.getRecipeById(req.params.id);
    res.json(recipe);
} catch(err){
    res.status(404).json({error:err})
  }
});
router.post('/', async(req,res) =>{
  const recipe = req.body;
  try{
    const { title, ingredients, steps } = recipe;
    const added = await recipes.addRecipe(title, ingredients, steps);
    res.status(200).json(recipe);
  } catch(err){
    res.status(500).json({error:err})
  }
})

router.put('/:id',async(req, res)=>{
  const recipe = req.body;
  try{
    const updateR = await recipes.updateRecipe(req.params.id, recipe);
    res.status(200).json(updateR);
  } catch(err){
    res.status(500).json({ error: err });
  }
})

router.patch('/:id',async(req, res)=>{
  try{
    let updateR = await recipes.patchRecipe(req.params.id, req.body);
    res.json(updateR);
  } catch(err){
    res.status(500).json({error:err})
  }
})

router.delete('/:id',async(req, res)=>{
  try{
    await recipes.removeRecipe(req.params.id);
    res.sendStatus(200);
  } catch(err){
    res.status(404).json({error:err})
  }
})
module.exports = router;
