const { beers } = require("../seedBeers");
// eslint-disable-next-line no-unused-vars
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("beers")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("beers").insert(beers);
    });
};
