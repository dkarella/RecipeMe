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
    saved: Boolean,
    private: Boolean,
    cookbook: String,
    ingredients: [{
        name: String,
        unit: String,
        prep: String,
        quantity: Number
    }],
    steps: [{
        number: Number,
        text: String
    }]
});

var RecipeModel = mongoose.model('Recipe', RecipeSchema);
module.exports = RecipeModel;