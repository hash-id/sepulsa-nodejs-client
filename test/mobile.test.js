//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const { Config, Mobile, MobileSandboxEnum, MobileReloadEnum, StatusEnum } = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("Mobile Class test", function() {
  before("Config setup", function() {
    this.cfg = new Config(URL, USER, PASS);
  });

  describe("Basic", function() {
    it("should have proper create and query methods ", function() {
      const instance = new Mobile(this.cfg);
      expect(instance).to.exist;
      expect(instance).to.be.an.instanceOf(Mobile);
      expect(instance.createTransaction).to.exist;
      expect(instance.createTransaction).to.be.a("function");
      expect(instance.queryTransactionDetail).to.exist;
      expect(instance.queryTransactionDetail).to.be.a("function");
    });
  });

  describe("Positive case", function() {
    it("should create success transaction", async function() {
      const instance = new Mobile(this.cfg);
      const result = await instance.createTransaction({
        customer_number: MobileSandboxEnum[081234000001],
        product_id: MobileReloadEnum.sandbox9,
        order_id: "PURCHASE-SUCCESS-01"
      });
      console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.oneOf([StatusEnum.success, StatusEnum.pending]);
      expect(result.type).to.be.eq("mobile");
    });

    it("should return success transaction detail", async function() {
      const instance = new Mobile(this.cfg);
      const result = await instance.queryTransactionDetail("PURCHASE-SUCCESS-01");
      console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(StatusEnum.success);
      expect(result.type).to.be.eq("mobile");
    });
  });

  describe("Negative case", function() {
    it("should create failed transaction", async function() {
      const instance = new Mobile(this.cfg);
      const result = await instance.createTransaction({
        customer_number: MobileSandboxEnum[081234000011],
        product_id: MobileReloadEnum.sandbox9,
        order_id: "PURCHASE-FAILED-01"
      });
      console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.oneOf([StatusEnum.failed, StatusEnum.pending]);
      expect(result.type).to.be.eq("mobile");
    });

    it("should return failed transaction detail", async function() {
      const instance = new Mobile(this.cfg);
      const result = await instance.queryTransactionDetail("PURCHASE-FAILED-01");
      console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(StatusEnum.failed);
      expect(result.type).to.be.eq("mobile");
    });
  });
});
