// set up server
const express = require("express"); //set up express
const { getBeers } = require("./db");
const app = express();
app.use(express.json()); //use express with built in body-parser

const setupExpressServer = () => {
  return app; //return app
};

app.get("/", (req, res) => {
  getBeers().then(beers => {
    res.send({
      results: beers
    });
  });
});

app.get("/:id", (req, res) => {
  getBeers().then(beers => {
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
