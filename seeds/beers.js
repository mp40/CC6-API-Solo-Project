const { beers } = require("../seedBeers");
// eslint-disable-next-line no-unused-vars
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("beers")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("beers").insert(
        beers.map(beer => {
          return {
            name: beer.name,
            abv: beer.abv,
            can500: beer.can500,
            can350: beer.can350,
            drinkable: beer.drinkable
          };
        })
      );
    });
};
