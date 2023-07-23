const Recipes = require('../models/recipe')

module.exports = {
    getRecipes: async (req, res) => {
        try{
            const listOfRecipes = await Recipes.find({userId:req.user.id})
            res.render('recipes.ejs', {recipes : listOfRecipes, user: req.user})
            console.log('Retrieving Recipes...')
        }catch(err){
            console.log(err)
        }
    },
    createRecipe : async (req,res) =>{
        try{
            await Recipes.create({
                name: req.body.recipeName,
                ingredients: req.body.ingred,
                instructions: req.body.instruct,
                userId: req.user.id
            })
            console.log('Recipe added successfully!')
            res.redirect('/familyRec')

        }catch(err){
            console.log(err)
        }
    },
    deleteRecipe : async (req,res) => {
        try{
            await Recipes.findOneAndDelete({_id: req.body.recipeIDFromJSFile})
            console.log('Deleted recipe')
            res.json('Deleted recipe')
        }catch(err){
            console.log(err)
        }
    }
}