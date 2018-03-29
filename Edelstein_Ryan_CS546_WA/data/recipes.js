const mongoCollections = require("../config/mongoCollections");
const lab7recipes = mongoCollections.lab7recipes;
const uuid = require('uuid/v4');


let exportedMethods = {
  //get all recipes
  async getAllRecipes(){
    try{
      let recipes = await lab7recipes()
      let allRecipes = await recipes.find({}).toArray(),
      recipeValues = [];
      allRecipes.forEach((recipe) =>{
        recipeValues.push({_id: recipe._id, title: recipe.title});
      })
      return recipeValues;
    } catch(err){
      throw err;
    }
  },
  //get recipe by id
  async getRecipeById(id){
    if(!steps instanceof Array) throw "steps MUST BE AN ARRAY"
    if (!id) throw "Please enter a valid ID";
    const recipes = await lab7recipes();
    const recipe =  await recipes.findOne({ _id: id });
    if (!recipe) throw "There is no recipe with that ID in the database";

    return recipe;
  },
  //post recipes (add)
  async addRecipe(title, ingredients, steps) {
    if(!steps instanceof Array) throw "steps MUST BE AN ARRAY"
    if(!ingredients instanceof Array) throw "ingredients MUST BE AN ARRAY"
    if (typeof title !== "string") throw "You must provide a title for your recipe";
    const rList = await lab7recipes();
    const newRecipe = {
      title: title,
      ingredients: ingredients,
      steps: steps,
      _id: uuid()
    };
    const added = await rList.insertOne(newRecipe);
    if (added.insertedCount === 0) throw "Could not add";
    const newId = added.insertedId;

    return await this.getRecipeById(newId);
  },
  //put recipe
  async updateRecipe(id, updatedRecipe){
      if(!steps instanceof Array) throw "steps MUST BE AN ARRAY"
      if(!ingredients instanceof Array) throw "ingredients MUST BE AN ARRAY"
      if(typeof id !== 'string') throw "ID IS NOT VALID"
      const updatedRecipeData = await lab7recipes();

      let replacedVals = {
        title: updatedRecipe.title,
        ingredients: updatedRecipe.ingredients,
        steps: updatedRecipe.steps
      };


      const replaced = await updatedRecipeData.updateOne({ _id: id }, replacedVals)
      if (replaced.modifiedCount !== 1) throw "THAT RECIPE COULD NOT BE FOUND"

      return await this.getRecipeById(id);
  },
  // Updates the specified recipe with only the supplied changes, and returns
  //the updated recipe
  async patchRecipe(id, updatedRecipe){
    if(!ingredients instanceof Array) throw "ingredients MUST BE AN ARRAY"
    if(!steps instanceof Array) throw "steps MUST BE AN ARRAY"
    try{
      const recipes = await lab7recipes();
      if(typeof(id)!=='string') throw "ID IS NOT VALID"
      if(!updatedRecipe) throw "Input cannot be null"

      let updateData = {};
      if(updatedRecipe.title){
        updateData.title = updatedRecipe.title
      }
      if(updatedRecipe.ingredients){
        updateData.ingredients = updatedRecipe.ingredients
      }
      if(updatedRecipe.steps){
        updateData.steps = updatedRecipe.steps
      }
      let newData = {
        $set: updateData
      }
      await recipes.updateOne({ _id:id }, newData)

      return await this.getRecipeById(id);
    } catch(error){
      console.log(error);
    }
  },
  //delete recipe
  async removeRecipe(id){
    try{
      if(!id) throw "You must provide an ID to search for.";
      if(typeof(id) !== 'string') throw "ID is not a valid id"
      let recipes = await lab7recipes();
      return await recipes.deleteOne({_id:id});
    } catch(err){
      throw err;
    }
  },
}


module.exports = exportedMethods;
