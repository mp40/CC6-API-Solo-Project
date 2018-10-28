const { development } = require("./knexfile");
const knex = require("knex")(development); //declared development as knexfile to save trouble

//needs to be an exported file to be able to spy on it
const getBeers = function() {
  return knex //a promise of beers
    .select()
    .table("beers");
};

const addBeer = function(beer) {
  return knex("beers")
    .insert(beer)
    .returning("*");
};

const deleteBeer = function(id) {
  return knex("beers")
    .where("id", id)
    .del();
};

const updateBeer = function(id, updatedBeer) {
  return knex("beers")
    .where("id", id)
    .update(updatedBeer);
};

module.exports = {
  getBeers,
  addBeer,
  deleteBeer,
  updateBeer
};
