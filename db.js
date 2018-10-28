const { development } = require("./knexfile");
const knex = require("knex")(development); //declared development as knexfile to save trouble

//needs to be an exported file to be able to spy on it
const getBeers = function() {
  return knex //a promise of beers
    .select()
    .table("beers");
};

module.exports = {
  getBeers
};
