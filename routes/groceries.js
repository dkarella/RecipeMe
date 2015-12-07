var express = require('express');
var router = express.Router();
var Groceries = require('../models/groceries.js');
var Recipes = require('../models/recipes.js');


router.get('/', function(req, res){
    // get list of recipes from the groceries model
    Groceries.findOne({"name": "default"}, 'recipes', function(err, docs){
        if(err){
            console.log(err);
            res.sendStatus(400);
        }
        else{
            // extract the ids of the recipes
            var recipesIds = [];
            for(var i = 0; i < docs.recipes.length; i++){
                recipesIds.push(docs.recipes[i]._id);
            }
            console.log(recipesIds);
            Recipes.find({
                '_id': { $in: recipesIds}
            }, function(err, docs){
                console.log(docs);
                res.send(docs);
            });
        }
    });
});
router.post('/add', function(req, res){
    console.log(req.body.recipe);

    // get the recipe id
    var recipeId = Groceries(req.body.recipe);

    Groceries.update({name:"default"}, { $push: {"recipes": {recipe: recipeId}} }, {upsert: true}, function(err, numAffected){
        if(err) res.sendStatus(400);
        else{
            console.log("updated: " + numAffected);
            res.sendStatus(200);
        }
    });
});

module.exports = router;
