//Tests for API project

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const { beers } = require("../seedBeers");

const { setupExpressServer } = require("..");

const app = setupExpressServer();

describe("The API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /", () => {
    it("should return list of beers'", async () => {
      const res = await request.get("/");
      res.should.be.json;
      JSON.parse(res.text).should.deep.equal({
        results: beers
      });
    });
  });
});
