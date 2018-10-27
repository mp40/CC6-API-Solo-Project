// set up server
const express = require("express"); //set up express
const app = express();
app.use(express.json()); //use express with built in body-parser
const setupExpressServer = () => {
  return app; //return app
};

//make sure it works
app.get("/hello", (req, res) => {
  res.send("world");
});

module.exports = {
  setupExpressServer
};
