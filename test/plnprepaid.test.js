//@ts-check
const { expect } = require("chai");
const dotEnv = require("dotenv");
const {
  Config,
  PlnPrepaid,
  PlnPrepaidEnum,
  PlnPrepaidSandboxEnum,
  StatusEnum,
  ResponseCodeEnum
} = require("../dist/index");

dotEnv.config();
const USER = process.env.ALTERRA_USER;
const PASS = process.env.ALTERRA_PASS;
const URL = process.env.ALTERRA_URL;

describe("PlnPrepaid Class test", function() {
  before("Config setup", function() {
    this.cfg = new Config(URL, USER, PASS);
  });

  describe("Basic", function() {
    it("should have proper create and query methods ", function() {
      const instance = new PlnPrepaid(this.cfg);
      expect(instance).to.exist;
      expect(instance).to.be.an.instanceOf(PlnPrepaid);
      expect(instance.createTransaction).to.exist;
      expect(instance.createTransaction).to.be.a("function");
      expect(instance.queryTransactionDetail).to.exist;
      expect(instance.queryTransactionDetail).to.be.a("function");
    });
  });

  describe("Positive case", function() {
    it("should result in success inquiry", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.inquiry({
        customer_number: PlnPrepaidSandboxEnum["01428800700"],
        product_id: PlnPrepaidEnum.sandbox
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(true);
      expect(result.response_code).to.be.eq(ResponseCodeEnum.Success);
    });

    it("should create success transaction", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.createTransaction({
        customer_number: "08123456789",
        meter_number: PlnPrepaidSandboxEnum["01428800700"],
        product_id: PlnPrepaidEnum.sandbox,
        order_id: "PLNPREPAID-SUCCESS-01"
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(true);
      expect(result.response_code).to.be.oneOf([ResponseCodeEnum.Success, ResponseCodeEnum.Pending]);
    });

    it("should return success transaction detail", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.queryTransactionDetail("PLNPREPAID-SUCCESS-01");
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(true);
      expect(result.response_code).to.be.eq(ResponseCodeEnum.Success);
    });
  });

  describe("Negative case", function() {
    it("should result in failed inquiry", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.inquiry({
        customer_number: PlnPrepaidSandboxEnum["01428800100"],
        product_id: PlnPrepaidEnum.sandbox
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(false);
      expect(result.response_code).to.be.eq(ResponseCodeEnum["Wrong number/ number blocked/ number expired"]);
    });

    it("should create failed transaction", async function() {
      const instance = new PlnPrepaid(this.cfg);
      const result = await instance.createTransaction({
        customer_number: "08123456789",
        meter_number: PlnPrepaidSandboxEnum["01428800701"],
        product_id: PlnPrepaidEnum.sandbox,
        order_id: "PLNPREPAID-FAIL-01"
      });
      //   console.log(result);
      expect(result).to.not.have.property("error");
      expect(result.status).to.be.eq(false);
      expect(result.response_code).to.not.eq(ResponseCodeEnum.Success);
    });
  });
});
