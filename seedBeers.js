//array of beers to be used to database

const yebisu = {
  id: 1,
  name: "Yebisu",
  abv: 5,
  can500: 314,
  can350: 242,
  drinkable: true
};

const asahi = {
  id: 2,
  name: "Asahi Super Dry",
  abv: 5,
  can500: 271,
  can350: 207,
  drinkable: true
};

const sapporo = {
  id: 3,
  name: "Sapporo",
  abv: 5,
  can500: 271,
  can350: 207,
  drinkable: true
};

const kirinIchi = {
  id: 4,
  name: "Kirin Ichiban",
  abv: 5,
  can500: 271,
  can350: 207,
  drinkable: true
};

const kirinGreen = {
  id: 5,
  name: "Kirin Green Label",
  abv: 4.5,
  can500: 212,
  can350: 154,
  drinkable: false
};

const malts = {
  id: 6,
  name: "Premium Malts",
  abv: 5.5,
  can500: 321,
  can350: 243,
  drinkable: true
};

const nodogoshi = {
  id: 7,
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
