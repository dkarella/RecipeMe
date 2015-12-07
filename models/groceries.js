// imports
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// Create the schema
var GroceriesSchema = new Schema({
    name: String,
    recipes: [{
        recipe: mongoose.Schema.Types.ObjectId
    }]
});

var GroceriesModel = mongoose.model('Groceries', GroceriesSchema);
module.exports = GroceriesModel;