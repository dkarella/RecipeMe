// imports
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// Create the schema
var RecipeSchema = new Schema({
    name: String,
    description: String,
    picture: String,
    servingSize: Number,
    difficulty: String,
    hours: Number,
    minutes: Number,
    ingredients: [{
        name: String,
        unit: String,
        quantity: Number
    }],
    steps: [{
        number: Number,
        text: String
    }]
});

// Add any extra functions
RecipeSchema.methods.insert = function(doc){

};

var RecipeModel = mongoose.model('Recipe', RecipeSchema);
module.exports = RecipeModel;