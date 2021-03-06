//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const { Config, General } = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("General Class test", function() {
  this.timeout(7000);
  before("Setup instance", function() {
    const cfg = new Config(URL, USER, PASS);
    this.instance = new General(cfg);
  });

  it("should have getBalance method ", async function() {
    expect(this.instance).to.exist;
    expect(this.instance).to.be.an.instanceOf(General);
    expect(this.instance.getBalance).to.exist;
    expect(this.instance.getBalance).to.be.a("function");
  });
  it("should return user balance", async function() {
    const result = await this.instance.getBalance();
    // console.log(result);
    expect(result).to.not.have.property("error");
    expect(result).to.have.property("balance");
  });

  it("should have getProduct method ", async function() {
    expect(this.instance).to.exist;
    expect(this.instance).to.be.an.instanceOf(General);
    expect(this.instance.getProduct).to.exist;
    expect(this.instance.getProduct).to.be.a("function");
  });

  it("should return mobile product", async function() {
    const result = await this.instance.getProduct("mobile");
    // console.log(result);
    expect(result).to.not.have.property("error");
    expect(result).to.have.property("data");
    expect(result.data[0]).to.have.property("type");
    expect(result.data[0].type).to.be.eq("mobile");
  });

  it("should return electricity data", async function() {
    const result = await this.instance.getProduct("electricity");
    // console.log(result);
    expect(result).to.not.have.property("error");
    expect(result).to.have.property("data");
    expect(result.data[0]).to.have.property("type");
    expect(result.data[0].type).to.be.eq("electricity");
  });
});
