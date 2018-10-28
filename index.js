// set up server
const express = require("express"); //set up express
const db = require("./db");
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
  db.getBeers().then(beers => {
    res.send({
      results: beers
    });
  });
});

app.get("/beers/:id", (req, res) => {
  db.getBeers().then(beers => {
    res.send(
      beers.find(beer => {
        return beer.id === Number(req.params.id); //first beer with matching id returned
      })
    );
  });
});

app.post("/beers", (req, res) => {
  db.addBeer(req.body).then(beer => {
    //any json that goes in lives in body
    res.send(beer);
  });
});

app.delete("/beers/:id", (req, res) => {
  db.deleteBeer(Number(req.params.id)).then(() => {
    res.send();
  });
});

app.put("/beers/:id", (req, res) => {
  db.updateBeer(Number(req.params.id), req.body).then(() => {
    res.send();
  });
});

module.exports = {
  setupExpressServer
};
