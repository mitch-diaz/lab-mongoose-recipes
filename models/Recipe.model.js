const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: function() { 
      return this.title; 
    }
  },
  level: {
    type: String, 
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: {
    type: [ String ]
  },
  cuisine: {
    type: String,
    required: function() { 
      return this.cuisine; 
    }
  },
  dishType: {
    type: String,
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink','dessert']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number, 
    min: 0
  },
  creator: {
    type: String,
  },
  created: {
    type: Date,
  }
},
{
  timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;