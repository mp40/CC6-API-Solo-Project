//array of beers to be used to database

const yebisu = {
  name: "Yebisu",
  abv: 5,
  can500: 314,
  can350: 242,
  drinkable: true
};

const asahi = {
  name: "Asahi Super Dry",
  abv: 5,
  can500: 271,
  can350: 207,
  drinkable: true
};

const sapporo = {
  name: "Sapporo",
  abv: 5,
  can500: 271,
  can350: 207,
  drinkable: true
};

const kirinIchi = {
  name: "Kirin Ichiban",
  abv: 5,
  can500: 271,
  can350: 207,
  drinkable: true
};

const kirinGreen = {
  name: "Kirin Green Label",
  abv: 4.5,
  can500: 212,
  can350: 154,
  drinkable: false
};

const malts = {
  name: "Premium Malts",
  abv: 5.5,
  can500: 321,
  can350: 243,
  drinkable: true
};

const nodogoshi = {
  name: "Kirin Nodogoshi",
  abv: 5,
  can500: 188,
  can350: 135,
  drinkable: false
};

const beers = [yebisu, asahi, sapporo, kirinIchi, kirinGreen, malts, nodogoshi];

module.exports = {
  beers
};
