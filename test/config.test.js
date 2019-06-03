//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const nock = require("nock");
const { Config } = require("../dist/index");

/**
 * obtain parameter from .env
 */
dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("Config Class test", function() {
  describe("Common", function() {
    before("Create config instance", function() {
      // setup config instance
      this.instance = new Config(URL, USER, PASS);
    });

    it("should have proper methods and getters", async function() {
      expect(this.instance).to.exist;
      expect(this.instance).to.be.an.instanceOf(Config);
      expect(this.instance).to.have.property("targetUrl");
      expect(this.instance).to.have.property("authToken");
      expect(this.instance.getRequest).to.exist;
      expect(this.instance.postRequest).to.exist;
      expect(this.instance.getRequest).to.be.a("function");
      expect(this.instance.postRequest).to.be.a("function");
    });
    it("should return correct targetUrl", async function() {
      expect(this.instance.targetUrl).to.be.eq(URL);
    });
    it("should return correct authToken", async function() {
      const refToken = new Buffer(`${USER}:${PASS}`).toString("base64");
      expect(this.instance.authToken).to.be.eq(`Basic ${refToken}`);
    });
  });

  describe("Request", function() {
    before("Create config instance", function() {
      this.instance = new Config("https://dummy.com", USER, PASS);
      nock("https://dummy.com")
        .persist(true)
        .get("/test-get")
        .reply(200, { doneGet: true });
      nock("https://dummy.com")
        .persist(true)
        .post("/test-post")
        .reply(200, { donePost: true });
    });

    it("should have valid auth token and user-agent", async function() {
      const [getResult, postResult] = await Promise.all([
        this.instance.getRequest("/test-get"),
        this.instance.postRequest("/test-post")
      ]);
      expect(getResult.config.headers).has.property("User-Agent");
      expect(postResult.config.headers).has.property("User-Agent");
      expect(getResult.config.headers["User-Agent"]).to.be.eq(USER);
      expect(postResult.config.headers["User-Agent"]).to.be.eq(USER);
      //
      expect(postResult.config.headers).has.property("Authorization");
      expect(getResult.config.headers).has.property("Authorization");
      expect(getResult.config.headers["Authorization"]).to.be.eq(this.instance.authToken);
      expect(postResult.config.headers["Authorization"]).to.be.eq(this.instance.authToken);
    });

    it("should create GET request without params", async function() {
      const result = await this.instance.getRequest("/test-get");
      expect(result.config.method).to.be.eq("get");
      expect(result.status).to.be.eq(200);
      expect(result.data).to.have.property("doneGet");
    });

    it("should create POST request without data", async function() {
      const result = await this.instance.postRequest("/test-post");
      expect(result.config.method).to.be.eq("post");
      expect(result.status).to.be.eq(200);
      expect(result.data).to.have.property("donePost");
    });
  });
});
