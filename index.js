// set up server
const express = require("express"); //set up express
const { getBeers } = require("./db");
const app = express();
app.use(express.json()); //use express with built in body-parser
const path = require("path"); //built into node
const setupExpressServer = () => {
  return app; //return app
};

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`)); //have to specify path to return data
});

app.get("/beers", (req, res) => {
  getBeers().then(beers => {
    res.send({
      results: beers
    });
  });
});

app.get("/beers/:id", (req, res) => {
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
