const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model.js');
// Import of the data from './data.json'
const data = require('./data.json');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    mongoose.model.create(recipeSchema)
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  // ===== CREATE RECIPE =====
  // Recipe.create(data).then(newRecipe => {
  //       console.log(`${this.title}`, newRecipe);
  //   }).then(() => {
  //       mongoose.disconnect();
  //   }).catch(err => {
  //       mongoose.disconnect();
  //       throw err;
  //   });


  // ===== GET THE ENTIRE DATABASE =====
  // Recipe.insertMany(data).then(allRecipes => {
  //     console.log(`Recipe titles: ${this.title}`, allRecipes);
  // }).then(() => {
  //     mongoose.disconnect();
  // }).catch(err => {
  //     mongoose.disconnect();
  //     throw err;
  // });


  // ===== UPDATE A RECIPE =====
//   Recipe.findByIdAndUpdate("631bda605c907e74d43ea660", {duration: 220}, {new: 100}).then(updatedRigatoniRecipe => {
//     console.log('Recipe has been updated!');
//   }).then(() => {
//     mongoose.disconnect();
//   }).catch(err => {
//     mongoose.disconnect();
//     throw err;
// });


// ===== DELETE A RECIPE =====
// Recipe.findByIdAndRemove("631bda605c907e74d43ea65f").then(removeCarrotCake => {
//   console.log({removeCarrotCake});
// }).then(() => {
//   console.log('Recipe has been removed.');
// }).then(() => {
//   mongoose.disconnect();
// }).catch(err => {
//   mongoose.disconnect();
//   throw err;
// });