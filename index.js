// set up server
const express = require("express"); //set up express
const { development } = require("./knexfile");
const knex = require("knex")(development); //declared development as knexfile to save trouble

const app = express();
app.use(express.json()); //use express with built in body-parser

const setupExpressServer = () => {
  return app; //return app
};

app.get("/", (req, res) => {
  knex
    .select()
    .table("beers")
    .then(beers => {
      res.send({
        results: beers
      });
    });
});

app.get("/:id", (req, res) => {
  knex
    .select()
    .table("beers")
    .then(beers => {
      res.send(
        beers.find(beer => {
          return beer.id === Number(req.params.id); //first beer with matching id returned
        })
      );
    });
});

module.exports = {
  setupExpressServer
};
