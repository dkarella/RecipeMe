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
            if (docs){
                var recipeIds = [];
                for(var i = 0; i < docs.recipes.length; i++){
                    recipeIds.push(docs.recipes[i].recipe);
                }
                console.log(recipeIds);
                Recipes.find({_id:{$in:recipeIds}}, function(err, docs){
                    if(err){
                        console.log(err);
                        res.sendStatus(400);
                    }
                    else{
                        console.log(docs);
                        res.json(docs);
                    }
                });
            }
            res.sendStatus(200);
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

router.delete('/remove/:id', function(req, res){
    Groceries.update({name:"default"}, { $pull: {"recipes": {recipe: req.body.id}} }, {upsert: true}, function(err, numAffected){
        if(err) res.sendStatus(400);
        else{
            console.log("updated: " + numAffected);
            res.sendStatus(200);
        }
    });
});

module.exports = router;
