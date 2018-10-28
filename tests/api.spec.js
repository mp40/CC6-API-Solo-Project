//Tests for API project
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const spies = require("chai-spies");
chai.use(spies);
chai.should();
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const sinon = require("sinon");
const { beers } = require("../seedBeers");

const { setupExpressServer } = require("..");

const db = require("../db");

const app = setupExpressServer();
const sandbox = sinon.sandbox.create();
describe("The API server", () => {
  let req;
  beforeEach(() => {
    req = chai.request(app);
    sandbox.stub(db, "getBeers").returns(Promise.resolve(beers)); //promise auto resolves beers
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("GET /beers", () => {
    it("should return list of beers", async () => {
      const res = await req.get("/beers");
      res.should.be.json;
      JSON.parse(res.text).should.deep.equal({
        results: beers
      });
      chai.expect(db.getBeers.called).to.equal(true);
    });
  });

  describe("GET /beers/1", () => {
    it("should return a beer matching id 1", async () => {
      const res = await req.get("/beers/1");
      res.should.be.json;
      JSON.parse(res.text).should.deep.equal({
        id: 1,
        name: "Yebisu",
        abv: 5,
        can500: 314,
        can350: 242,
        drinkable: true
      });
    });
  });

  describe("POST /beers", () => {
    it("should add a beer", async () => {
      const kirinTest = {
        name: "Kirin Test Label",
        abv: 4.5,
        can500: 212,
        can350: 154,
        drinkable: false
      };
      const addedBeer = {
        id: 8,
        name: "Kirin Test Label",
        abv: 4.5,
        can500: 212,
        can350: 154,
        drinkable: false
      };
      sandbox
        .stub(db, "addBeer")
        .withArgs(kirinTest) // checking beer is passed in
        .returns(Promise.resolve(addedBeer));
      const res = await req.post("/beers").send(kirinTest);
      res.should.be.json;
      JSON.parse(res.text).should.deep.equal(addedBeer);
    });
  });

  describe("DELETE /beers/:id", () => {
    it("should delete a beer", async () => {
      sandbox
        .stub(db, "deleteBeer")
        .withArgs(8)
        .returns(Promise.resolve());
      const res = await req.delete("/beers/8").send();
      res.should.be.ok;
    });
  });

  describe("PUT /beers/:id", () => {
    it("should update a beer", async () => {
      const kirinTest = {
        name: "Kirin Test Label",
        abv: 4.5,
        can500: 212,
        can350: 154,
        drinkable: false
      };

      sandbox
        .stub(db, "updateBeer")
        .withArgs(8, kirinTest)
        .returns(Promise.resolve());
      const res = await req.put("/beers/8").send(kirinTest);
      res.should.be.ok;
    });
  });
});
