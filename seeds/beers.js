const {
  beers
} = require("../seedBeers");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('beers').insert(beers);
    });
};