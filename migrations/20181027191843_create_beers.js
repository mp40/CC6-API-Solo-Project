// eslint-disable-next-line no-unused-vars
exports.up = function(knex, Promise) {
  return knex.schema.createTable("beers", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column
    t.string("name", 50) // maximum length of 50 characters
      .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
    t.float("abv")
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
    t.integer("can500")
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
    t.integer("can350")
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
    t.boolean("drinkable")
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
  });
};

// eslint-disable-next-line no-unused-vars
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("beers");
};
