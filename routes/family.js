const express = require('express')
const router = express.Router()
const familyController = require('../controllers/family')

router.get('/',familyController.getRecipes)
router.post('/createRecipe', familyController.createRecipe)
router.delete('/deleteRecipe',familyController.deleteRecipe)

module.exports = router