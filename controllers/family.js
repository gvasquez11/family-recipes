const Recipes = require('../models/recipe')

module.exports = {
    getRecipes: async (req, res) => {
        try{
            const listOfRecipes = await Recipes.find()
            res.render('recipes.ejs', {recipes : listOfRecipes})
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
                instructions: req.body.instruct
            })
            console.log('Recipe added successfully!')
            res.redirect('/familyRec')

        }catch(err){
            console.log(err)
        }
    }
}