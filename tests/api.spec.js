//Tests for API project

const { setupExpressServer } = require("..");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const app = setupExpressServer();

describe("The API server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /hello - returning text", () => {
    it("should return the text/html 'world'", async () => {
      const res = await request.get("/hello");
      res.should.be.html;
      res.text.should.equal("world");
    });
  });
});
