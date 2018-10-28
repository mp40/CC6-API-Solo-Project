//Tests for API project
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const spies = require("chai-spies");
chai.use(spies);
chai.should();
//const { spy } = require("sinon");
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
    //db.getBeers.calls.restore();
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
      JSON.parse(res.text).should.deep.equal(beers[0]);
    });
  });
});
